import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
  return (
    <div className=" p-4 m-4 text-center h-screen w-full ">
      <h1 className="text-5xl tracking-widest font-bold mb-10 text-sky-300">
        MyBlog
      </h1>
      <div className="border-gray-200 border-[1px] shadow-xl w-[330px] h-[320px] mx-auto py-3 my-3">
        <form>
          <div className="py-3">
            <label className="text-sky-300 font-semibold text-xl">
              USERNAME
            </label>
          </div>
          <div className="flex items-center justify-center pb-3">
            <span className="mr-1">
              <FaRegUserCircle />
            </span>

            <input
              type="text"
              placeholder="Enter Name"
              required
              className="border-sky-300 border-b-[1px]"
            />
          </div>
          <div className="py-3">
            <label className="font-semibold text-xl text-sky-300">
              PASSWORD
            </label>
          </div>
          <div className="flex justify-center items-center pb-6">
            <span className="mr-1">
              <RiLockPasswordLine />
            </span>
            <input
              type="text"
              placeholder="Enter Password"
              required
              className="border-sky-300 border-b-[1px]"
            />
          </div>
          <button className="bg-sky-300 px-12 rounded-2xl py-1 text-white">
            LOGIN
          </button>
          <h2 className="text-sky-300 font-semibold text-sm py-4">
            FOROGT PASSWORD?
          </h2>
          <h2 className="text-sky-300 font-semibold text-sm">
            NO ACCOUNT? <span className="font-extrabold cursor-pointer">SIGN UP</span> 
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Signup;
