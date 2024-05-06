import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Banner from "../components/Banner";
import Pagination from "./Pagination";

const Blogs = () => {
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
      <div className="bg-black py-24 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold pb-6">Blog Page</h1>
        </div>
      </div>

      <div className="cards">
        <BlogCard
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

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

export default Blogs;
