import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";

export default function News() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        slug,
        publishedAt,
        mainImage{
          asset->{url}
        }
      }`)
      .then((data) => {
        console.log("BLOG LIST:", data);
        setBlogs(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      {/*  HERO */}
     <section className="bg-gray-700 py-32 text-center">
        <h1 className="text-4xl font-bold text-white/80">News & Blogs</h1>
        <p className="mt-2 text-sm opacity-80 text-white/80">
          Latest updates, insights & logistics trends
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">

          {blogs.length === 0 ? (
            <p className="text-center">No blogs found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {blogs.map((blog) => {
                const date = new Date(blog.publishedAt);

                return (
                  <Link
                    key={blog._id}
                    to={`/blogs/${blog.slug?.current}`}
                    className="group"
                  >
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src={blog.mainImage?.asset?.url || "/images/default.jpg"}
                        alt={blog.title}
                        className="h-[250px] w-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-gray-400">
                        {date.toDateString()}
                      </p>

                      <h3 className="mt-2 font-semibold text-gray-800 group-hover:text-red-600">
                        {blog.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}

            </div>
          )}
        </div>
      </section>
    </main>
  );
}