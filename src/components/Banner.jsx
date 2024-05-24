import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black py-44">
      <div className="text-white text-center">
        <h1 className="text-7xl font-bold pb-6">Welcome to Our Blog</h1>
        <p className="pb-6 text-base text-xl">
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories.
        </p>
        <div className="pb-6">
          <Link to="/" className="inline-flex items-center text-lg">
            Learn more
            <PiArrowRightBold className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
