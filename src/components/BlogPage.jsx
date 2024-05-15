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

  return <div></div>;
};

export default BlogPage;
