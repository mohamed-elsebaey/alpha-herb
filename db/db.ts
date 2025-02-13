"use server";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

// Load environment variables from .env file
dotenv.config();

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

/**
 * Executes a SQL query and returns the results.
 * @param query - The SQL query string.
 * @param values - Optional array of values for parameterized queries.
 * @returns A promise resolving to an array of results.
 */
async function executeQuery<T>(
  query: string,
  values?: (string | number | undefined)[]
): Promise<T[]> {
  const connection = await pool.getConnection();
  try {
    const [results] = await connection.query<mysql.RowDataPacket[]>(
      query,
      values
    );
    return results as T[];
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  } finally {
    connection.release();
  }
}

// ----------------------------- Provider Auth Like Google <Start> -----------------------------

/**
 * Handles user credentials for provider-based authentication (e.g., Google).
 * @param email - User's email.
 * @param name - User's name (optional).
 * @param image - User's profile image URL (optional).
 * @returns An object containing the user data.
 */
export async function userCredentials(
  email: string,
  name?: string,
  image?: string
) {
  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  const user: any = existingUser[0];

  // Update user's name and image if they have changed
  if (user && (user.name !== name || user.profilePath !== image)) {
    await executeQuery(
      "UPDATE users SET name = ?, profilePath	= ?, latest_update = CURRENT_TIMESTAMP WHERE email = ?",
      [name, image, email]
    );
    user.name = name;
    user.profilePath = image;
    return { user };
  }

  // Create a new user if they don't exist
  if (!user) {
    const verificationCode = Math.floor(Math.random() * 1000000);
    const randomPassword = Math.floor(Math.random() * 100000000000000);
    const hashedPassword = await bcrypt.hash(`${randomPassword}`, 10);
    const verified = 1;

    const userData: any = await executeQuery(
      "INSERT INTO users (name, email, password, verified, verCode, 	profilePath	) VALUES (?, ?, ?, ?, ?, ?) RETURNING id, phone, role, country, state",
      [name, email, hashedPassword, verified, verificationCode, image]
    );

    const userId = userData[0].id;

    const newUser = {
      id: userId,
      name: name,
      email: email,
      phone: userData[0].phone,
      role: userData[0].role,
      profilePath: image,
      verified: 1,
      country: userData[0].country,
      state: userData[0].state,
    };

    return { user: newUser };
  }

  return { user };
}

// ----------------------------- Provider Auth Like Google <End> -----------------------------

export async function addNewUser(
  email: string,
  password: string,
  verCode: number
) {
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }

  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return { errors: { email: "* Email already exists" } };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result: any = await executeQuery(
    "INSERT INTO users (email, password, verCode) VALUES (?, ?, ?) RETURNING id,name,phone,role,profilePath,verified,country,state,verCode",
    [email, hashedPassword, verCode]
  );

  const user = {
    id: result[0].id,
    name: result[0].name,
    email: email,
    phone: result[0].phone,
    role: result[0].role,
    profilePath: result[0].profilePath,
    verified: result[0].verified,
    country: result[0].country,
    state: result[0].state,
    verCode: result[0].verCode,
  };
  // i will use userData in Session
  return { user: user };
}

// ****************************************  Sign In ****************************************

export async function userDataAuthentication(email: string, password: string) {
  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length == 0) {
    return { errors: { email: "* Invalid email " } };
  }

  const user: any = existingUser[0];
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { errors: { password: "* Incorrect password" } };
  }
  return { user: user };
}

// ****************************************  Get User Data ****************************************

export async function getUserDataFromDB(id: number) {
  const existingUser = await executeQuery("SELECT * FROM users WHERE id = ?", [
    id,
  ]);

  if (existingUser.length == 0) {
    return {
      errors: {
        id: "* Invalid 'id' in function (getUserDataFromDB) in db file ",
      },
    };
  }

  const user = existingUser[0];

  return user;
}

// ****************************************  Update User Data ****************************************
export async function updateUserProfileData(
  email: string,
  name: string,
  phone: string,
  country: string,
  profilePath: string
) {
  const UpdateData = await executeQuery(
    "UPDATE users SET name = ? , phone = ? , country = ? , profilePath = ? WHERE email = ?",
    [name, phone, country, profilePath, email]
  );

  return UpdateData;
}
// ****************************************  Blogs Data ****************************************

export async function getAllBlogs() {
  const blogs = await executeQuery("SELECT * FROM blogs");
  return blogs;
}

export async function getAuthorDataById(id: any) {
  const authorData = await executeQuery(
    "SELECT name,profilePath FROM users WHERE id = ?",
    [id]
  );
  return authorData;
}

export async function getNamesOfThoseWhoLikedTheArticleByBlogId(id: any) {
  const namesOfThoseWhoLikedTheArticle: any = await executeQuery(
    "SELECT users.name,users.email FROM blogs_likes INNER JOIN users ON blogs_likes.user_id = users.id WHERE blogs_likes.article_id = ?",
    [id]
  );
  return namesOfThoseWhoLikedTheArticle;
}

export async function getAllCommentsOnArticleByBlogId(id: any) {
  const numberOfCommentsOnTheArticle = await executeQuery(
    "SELECT COUNT(*) AS total_comments FROM blogs_comments WHERE article_id = ?",
    [id]
  );
  return numberOfCommentsOnTheArticle;
}
export async function grtAllUserCommentsWithTheirNamesAndProfilePicturePathByBlogId(
  id: any
) {
  const AllUserCommentsWithTheirNamesAndProfilePicturePath = await executeQuery(
    "SELECT blogs_comments.id,blogs_comments.comment,blogs_comments.created_at,users.name,users.profilePath FROM blogs_comments INNER JOIN users ON blogs_comments.user_id = users.id WHERE blogs_comments.article_id = ?",
    [id]
  );
  return AllUserCommentsWithTheirNamesAndProfilePicturePath;
}
// +++++++

export async function getArticleLikeStateByUserIdArticleId(
  userId: any,
  articleId: any
) {
  const likeState = await executeQuery(
    "SELECT id FROM blogs_likes WHERE user_id = ? AND article_id = ? ",
    [userId, articleId]
  );
  if (likeState.length == 0) {
    executeQuery("INSERT INTO blogs_likes (user_id,article_id) VALUES (?,?)", [
      userId,
      articleId,
    ]);
  } else {
    executeQuery(
      "DELETE FROM blogs_likes WHERE user_id = ? AND article_id = ? ",
      [userId, articleId]
    );
  }
}

// +++++++
export async function addUserCommentToArticleByUserIdArticleId(
  userId: any,
  articleId: any,
  userComment: any
) {
  await executeQuery(
    "INSERT INTO blogs_comments(user_id, article_id, comment) VALUES (?, ?, ?)",
    [userId, articleId, userComment]
  );
}

// ****************************************  *****  ***** ****************************************
// ****************************************  * ADMIN DB * ****************************************
// ****************************************  *****  ***** ****************************************

export async function insertMedicinalPlantsActionToPlantsTable(data: any) {
  const result: any = await executeQuery(
    "INSERT INTO medicinal_plants (engineer_id, axis_number, crop_type, planting_date, plant_age, watering_speed, watering_hours, fertilization, generator_hours, breakdowns_maintenance, driver_name, equipment_type, equipment_working_hours, contractor, num_workers, workers_working_hours) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      data.engineer_id,
      data.axis_number,
      data.crop_type,
      data.planting_date,
      data.plant_age,
      data.watering_speed,
      data.watering_hours,
      data.fertilization,
      data.generator_hours,
      data.breakdowns_maintenance,
      data.driver_name,
      data.equipment_type,
      data.equipment_working_hours,
      data.contractor,
      data.num_workers,
      data.workers_working_hours,
    ]
  );
}

export async function selectDataFromMedicinalPlantsTable(id?: number) {
  const MedicinalPlantsTable: any = await executeQuery(
    `SELECT * FROM medicinal_plants 
     ${
       id
         ? `WHERE engineer_id = ${id} AND CAST(created_at AS DATE) = CAST(CURRENT_TIMESTAMP AS DATE)`
         : ""
     }`
  );
  return MedicinalPlantsTable;
}
