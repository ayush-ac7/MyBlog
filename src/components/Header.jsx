import { Link } from "react-router-dom";

const Header = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <div className="bg-black">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-4xl italic">MyBlog</h1>
          <div className="links">
            {navItems.map(({ path, link }) => (
              <Link
                to={path}
                key={link}
                className="text-white mr-9 cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default Header;
