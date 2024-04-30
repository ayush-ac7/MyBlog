import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogsData from "../utils/BlogsData.json";
import Banner from "../components/Banner";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(BlogsData);
  }, []);

  return (
    <div>
      <div className="w-full">
        <div>
        <Banner />
        </div>
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

      <div className="flex px-4">
        <div className="cards">
          <BlogCard blogs={blogs} />
        </div>
        <form>
          <div className="write-blog text-center p-2 my-4">
            <div>
              <h1 className="py-4 font-bold text-xl text-orange-500">Write your Blog!</h1>

              <input
                type="text"
                placeholder="Blog Title"
                className="border-gray-300 rounded-md border-[2px] my-2"
              />
              <textarea
                className="w-[350px] h-[200px] border-[2px] rounded-lg border-gray-300 my-2"
                type="text"
                placeholder="Start your blog..."
              />
              <input
                type="text"
                placeholder="Author Name"
                className="border-gray-300 rounded-md border-[2px] "
              />
            </div>
            <button className="bg-blue-500 py-1 rounded-2xl px-6 m-4 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
