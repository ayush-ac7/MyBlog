import { FaUserPen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  const filteredBlogs = blogs;

  return (
    <div className="cards py-6 px-6 flex flex-wrap max-w-6xl">
      {blogs.map((blog, i) => (
        <Link key={i}>
          <div className="card w-[300px] h-[320px] border-gray-200 border-2 p-2 rounded-lg shadow-lg">
            <div>
              <img className="w-70 rounded-lg pb-1" src={blog.image} />
            </div>
            <p className="font-semibold pb-1 hover:text-blue-500">
              {blog.title}
            </p>
            <div className="flex items-center pb-1">
              <span className="pr-1">
                <FaUserPen />
              </span>
              <span>{blog.author}</span>
            </div>
            <p className="text-sm ">{blog.published_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
