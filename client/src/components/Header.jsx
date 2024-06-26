import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/addblog", link: "Add Blog" },
    { path: "/blogs", link: "Blogs" },
     //{ path: "/myblogs", link: "My Blogs" },
  ];

  return (
    <div className="bg-black p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-4xl italic">MyBlog</h1>
        <div className="links flex mt-3">
          {navItems.map(({ path, link }) => (
            <Link
              to={path}
              key={link}
              className="hidden md:flex  text-white mr-14  cursor-pointer hover:border-b-2 hover:border-white"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="bg-orange-400 text-white p-2 m-2 rounded-lg">
          <Link to={"/signup"}>
            <button className="cursor-pointer">Sign up/Log In</button>
          </Link>
        </div>
        <div className="md:hidden">
          <button>
            <TiThMenu className="bg-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
