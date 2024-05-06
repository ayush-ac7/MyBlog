import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Banner from "../components/Banner";
import Pagination from "./Pagination";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; //blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isactive, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //filter by category
      let url = `http://localhost:5000/blog?page${currentPage}&${pageSize}`;

      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    };

    fetchData();
  }, [currentPage, pageSize, selectedCategory]);

  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
        {/* blogs category  */}
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

      {/* blog cards */}

      <div className="cards">
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* pagination */}

      <div>
        <Pagination
          onPageChange={handlePageChange}
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
