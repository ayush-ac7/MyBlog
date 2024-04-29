import { PiPlaceholder } from "react-icons/pi";

const Signup = () => {
  return (
    <div className=" p-2 m-2">
      <h1>Sign In</h1>
      <form>
        <div className="pb-2">
          <label>Enter Name : </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="border-black border-[1px]"
          />
        </div>
        <div>
          <label>Enter Email : </label>
          <input
            type="text"
            placeholder="Enter Email"
            className="border-black border-[1px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
