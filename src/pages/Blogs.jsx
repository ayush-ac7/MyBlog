import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Banner from "../components/Banner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //filter by category
      let url = `http://localhost:5000/blog`;

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-black py-24 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold pb-6">Blog Page</h1>
        </div>
      </div>

      <div className="cards">
        <BlogCard blogs={blogs} />
      </div>
    </div>
  );
};

export default Blogs;
