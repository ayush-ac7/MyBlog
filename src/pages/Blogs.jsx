import { useContext } from "react";
import { BlogContext } from "../utils/BlogContext";

const Blogs = () => {
  const { blogs } = useContext(BlogContext);

  // if(blogs.length === 0) {
  //   return <h2 className="text-white">Blog is empty, Please write a blog</h2>
  // }

  return (
    <div>
      <div className="bg-black py-8 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold pb-6 text-orange-500" >All your blogs...</h1>
        </div>
      </div>

  

      <div className="flex flex-wrap">
        {blogs.map((blog, index) => (
          <div
            className="w-[400px] border-2 mx-4 p-4 mt-6 rounded-lg"
            key={index}
          >
            <h2 className="font-mono py-2">Title : {blog.title}</h2>
            <p className="font-serif text-sm py-2">
              Description : {blog.description}
            </p>
            <h3 className="text-sm">Author : {blog.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
