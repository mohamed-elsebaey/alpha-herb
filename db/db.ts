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
  connectionLimit: 5,
  maxIdle: 5,
  idleTimeout: 30000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
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
  const existingUser = await executeQuery<User>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  const user = existingUser[0];

  // Update user's name and image if they have changed
  if (user && (user.name !== name || user.profilePath !== image)) {
    // await executeQuery(
    //   "UPDATE users SET name = ?, profilePath = ?, latest_update = CURRENT_TIMESTAMP WHERE email = ?",
    //   [name, image, email]
    // );
    await executeQuery(
      "UPDATE users SET name = ?, latest_update = CURRENT_TIMESTAMP WHERE email = ?",
      [name, email]
    );
    user.name = name ?? null;
    // user.profilePath = image ?? null;
    return { user };
  }

  // Create a new user if they don't exist
  if (!user) {
    const verificationCode = Math.floor(Math.random() * 1000000);
    const randomPassword = Math.floor(Math.random() * 100000000000000);
    const hashedPassword = await bcrypt.hash(`${randomPassword}`, 10);
    const verified = 1;

    const userData = await executeQuery<User>(
      "INSERT INTO users (name, email, password, verified, verCode, 	profilePath	) VALUES (?, ?, ?, ?, ?, ?) RETURNING id, phone, role, country, state",
      [name, email, hashedPassword, verified, verificationCode, image]
    );

    const userId = userData[0].id;

    const newUser: User = {
      id: userId,
      name: name || null,
      email: email,
      phone: userData[0].phone || null,
      role: userData[0].role as "USER" | "ADMIN" | "CEO" | "DEV",
      profilePath: image || null,
      verified: Boolean(verified),
      country: userData[0].country || null,
      state: userData[0].state || null,
      verCode: verificationCode,
      created_at: new Date(),
      latest_update: new Date(),
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

  const existingUser = await executeQuery<User>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return { errors: { email: "* Email already exists" } };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await executeQuery<User>(
    "INSERT INTO users (email, password, verCode) VALUES (?, ?, ?) RETURNING id,name,phone,role,profilePath,verified,country,state,verCode,created_at,updated_at",
    [email, hashedPassword, verCode]
  );

  const user: User = {
    id: result[0].id,
    name: result[0].name,
    email: email,
    phone: result[0].phone,
    role: result[0].role as "USER" | "ADMIN" | "CEO" | "DEV",
    profilePath: result[0].profilePath,
    verified: result[0].verified,
    country: result[0].country,
    state: result[0].state,
    verCode: result[0].verCode,
    created_at: result[0].created_at,
    latest_update: result[0].latest_update,
  };

  return { user };
}

// ****************************************  Sign In ****************************************

export async function userDataAuthentication(email: string, password: string) {
  const existingUser = await executeQuery<{ password: string } & User>(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length == 0) {
    return { errors: { email: "* Invalid email " } };
  }

  const user = existingUser[0];
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { errors: { password: "* Incorrect password" } };
  }
  return { user: user };
}

// ****************************************  Get User Data ****************************************

export async function getUserDataFromDB(id: number) {
  const existingUser = await executeQuery<User>(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );

  if (existingUser.length == 0) {
    return {
      errors: {
        id: "* Invalid 'id' in function (getUserDataFromDB) in db file ",
      },
    };
  }

  const user = existingUser[0];

  return user as User;
}

// ****************************************  Update User Data ****************************************
export async function updateUserProfileData(
  email: string,
  name: string,
  phone: string,
  country: string,
  profilePath: string
) {
  const UpdateData = await executeQuery<User>(
    "UPDATE users SET name = ? , phone = ? , country = ? , profilePath = ? WHERE email = ?",
    [name, phone, country, profilePath, email]
  );

  return UpdateData;
}
// ****************************************  Blogs Data ****************************************

export async function getAllBlogs() {
  const blogs = await executeQuery<Blog>(
    `SELECT 
    b.id, b.title, b.description, b.image_path, b.created_at, b.updated_at,
    c.category_name_en, 
    p.name AS product_name, 
    a.name AS author_name, a.id AS author_id, a.profilePath AS author_profile_path
    FROM blogs b
    JOIN users a ON b.author_id = a.id
    JOIN categories c ON b.category_id = c.id
    JOIN products p ON b.product_id = p.id`
  );
  return blogs;
}

// ********************************************************************************************************
export async function getArticleDateByArticleTitle(articleTitle: string) {
  const articleData = await executeQuery<Blog>(
    "SELECT * FROM blogs WHERE title = ?",
    [articleTitle]
  );
  return articleData[0];
}
// ********************************************************************************************************

// ****************************************  Get Author Data By Id ****************************************
// export async function getAuthorDataById(id: number) {
//   const authorData = await executeQuery<{ name: string; profilePath: string }>(
//     "SELECT name,profilePath FROM users WHERE id = ?",
//     [id]
//   );
//   return authorData;
// }

export async function getNamesOfThoseWhoLikedTheArticleByBlogId(id: number) {
  const namesOfThoseWhoLikedTheArticle = await executeQuery<{
    name: string;
    email: string;
  }>(
    "SELECT users.name,users.email FROM blogs_likes INNER JOIN users ON blogs_likes.user_id = users.id WHERE blogs_likes.article_id = ?",
    [id]
  );
  return namesOfThoseWhoLikedTheArticle;
}

export async function getAllCommentsOnArticleByBlogId(id: number) {
  const numberOfCommentsOnTheArticle = await executeQuery<{
    total_comments: number;
  }>(
    "SELECT COUNT(*) AS total_comments FROM blogs_comments WHERE article_id = ?",
    [id]
  );
  return numberOfCommentsOnTheArticle;
}
export async function grtAllUserCommentsWithTheirNamesAndProfilePicturePathByBlogId(
  id: number
) {
  const AllUserCommentsWithTheirNamesAndProfilePicturePath =
    await executeQuery<{
      id: number;
      comment: string;
      created_at: Date;
      name: string;
      profilePath: string;
    }>(
      "SELECT blogs_comments.id,blogs_comments.comment,blogs_comments.created_at,users.name,users.profilePath FROM blogs_comments INNER JOIN users ON blogs_comments.user_id = users.id WHERE blogs_comments.article_id = ?",
      [id]
    );
  return AllUserCommentsWithTheirNamesAndProfilePicturePath;
}
// +++++++

export async function getArticleLikeStateByUserIdArticleId(
  userId: number,
  articleId: number
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
  userId: number,
  articleId: number,
  userComment: string
) {
  await executeQuery(
    "INSERT INTO blogs_comments(user_id, article_id, comment) VALUES (?, ?, ?)",
    [userId, articleId, userComment]
  );
}

// ****************************************  *****  ***** ****************************************
// ****************************************  * ADMIN DB * ****************************************
// ****************************************  *****  ***** ****************************************

export async function insertMedicinalPlantsActionToPlantsTable(
  data: MedicinalPlantData
) {
  const result = await executeQuery<MedicinalPlantData>(
    "INSERT INTO medicinal_plants (engineer_id, axis_number, crop_type, planting_date, plant_age, watering_speed, watering_hours, fertilization, generator_hours, breakdowns_maintenance, driver_name, equipment_type, equipment_working_hours, contractor, num_workers, workers_working_hours) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      data.engineer_id,
      data.axis_number,
      data.crop_type,
      data.planting_date instanceof Date
        ? data.planting_date.toISOString().split("T")[0]
        : data.planting_date,
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
  return result;
}

export async function selectDataFromMedicinalPlantsTable(id?: number) {
  const query = id
    ? "SELECT * FROM medicinal_plants WHERE engineer_id = ? AND CAST(created_at AS DATE) = CAST(CURRENT_TIMESTAMP AS DATE)"
    : "SELECT * FROM medicinal_plants";

  const MedicinalPlantsTable = await executeQuery<MedicinalPlantData>(
    query,
    id ? [id] : undefined
  );
  return MedicinalPlantsTable;
}

