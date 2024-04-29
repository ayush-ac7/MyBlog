import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogsData from "../utils/BlogsData.json";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(BlogsData);
  }, []);

  return (
    <div>
      <div className="w-full">
        <div className="links max-w-7xl mx-auto mt-5 border-gray-200 border-b-2 pb-4">
          {["All", "Startups", "Security", "AI", "Apps", "Tech"].map(
            (item, i) => (
              <a
                key={i}
                className="cursor-pointer mr-16 text-md font-semibold hover:text-orange-500"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
      <div className="cards">
        <BlogCard blogs={blogs} />
      </div>
    </div>
  );
};

export default Home;
