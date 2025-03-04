import { getAllBlogs } from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import AuthorSection from "./card/AuthorSection";
import LikesSection from "./card/LikesSection";

async function Blogs() {
  let blogs: Blog[] | undefined;
  try {
    blogs = await getAllBlogs();
  } catch (error) {
    console.error(error);
    return (
      <div className="text-center py-10">
        <p className="text-red-500">
          Sorry, an error occurred while loading blogs
        </p>
      </div>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No blogs available at the moment</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="py-4 px-4 md:px-10 max-w-screen-xl mx-auto relative">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[850px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Blogs
              </span>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Discover the Power of Organic Medicinal and Aromatic Plants
              </h2>
              <p className="text-base text-secondary">
                Explore the world of organic medicinal and aromatic plants.
                Learn about their benefits, cultivation, and uses in various
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap justify-center ">
          {blogs &&
            blogs.map((blog) => (
              <div
                className="mx-4 relative flex flex-col my-6 bg-white shadow-md border border-gray-200 hover:shadow-primary rounded-lg max-w-md" // max-w-sm
                key={blog.id}
              >
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  {blog.id == 1 ? (
                    <Image
                      width={500}
                      height={500}
                      src={`/images/medicinal-plants/${blog["image_path"]}`}
                      alt="card-image"
                      priority
                    />
                  ) : (
                    <Image
                      width={500}
                      height={500}
                      src={`/images/medicinal-plants/${blog["image_path"]}`}
                      alt="card-image"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
                    POPULAR
                  </div>
                  <Link href={`/blog/${blog.title}`}>
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                      {blog.title}
                    </h6>
                    <p className="text-slate-600 leading-normal font-light">
                      {blog.description}
                    </p>
                  </Link>
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <AuthorSection profilePath={blog.author_profile_path} />
                    <div className="flex flex-col ml-3 text-sm">
                      <span className="text-slate-800 font-semibold">
                        {blog.author_name}
                      </span>
                      <span className="text-slate-600">
                        {blog.created_at.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <LikesSection id={blog.id} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
