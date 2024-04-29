import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {

  const navItems = [
    {path: "/", link: "Home"},
    {path: "/services", link: "Services"},
    {path: "/about", link: "About"},
    {path: "/blogs", link: "Blogs"},
    {path: "/contact", link: "Contact"}
  ];

  return (
    <div className="bg-zinc-900">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-4xl italic">MyBlog</h1>
          <div className="links">
            {navItems.map(
              ({path, link}) => (
                <Link to={path} key={link} className="text-white mr-9 cursor-pointer">
                  {link}
                </Link>
              )
            )}
          </div>
          <div className="bg-orange-400 text-white p-2 m-2 rounded-lg">
            <button className="cursor-pointer">Sign up/Log In</button>
          </div>
        </div>
      </div>
      <div className="text-white mt-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold pb-6">Welcome to Our Blog</h1>
          <h4 className="pb-4 text-base">
            Start your blog today and join a community of writers and readers
            who are passionate about sharing their stories and <br />
            ideas. We offer everything you need to get started, from helpful
            tips and tutorials.
          </h4>
          <div className=" flex justify-center items-center pb-20">
            <span className="mr-1">
              <button>Learn more</button>
            </span>
            <span>
              <PiArrowRightBold />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
