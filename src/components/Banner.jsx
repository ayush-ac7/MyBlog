import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black py-12">
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold pb-6">Welcome to Our Blog</h1>
        <p className="pb-4 text-base">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and <br />
          ideas. We offer everything you need to get started, from helpful tips
          and tutorials.
        </p>
        <div className="pb-8">
          <Link to="/" className="inline-flex items-center">
            Learn more
            <PiArrowRightBold className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
