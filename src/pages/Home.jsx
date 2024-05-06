import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="w-full">
      <div>
        <Banner />
      </div>

      <div className="write-blog text-center p-2 my-4">
        <form>
          <div className="">
            <h1 className="py-4 font-bold text-xl text-orange-500">
              Write your Blog!
            </h1>

            <div>
              <input
                type="text"
                placeholder="Blog Title"
                className="border-gray-300 rounded-md border-[2px] my-2"
              />
            </div>
            <div>
              <textarea
                className="w-[350px] h-[200px] border-[2px] rounded-lg border-gray-300 my-2"
                type="text"
                placeholder="Start your blog..."
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Author Name"
                className="border-gray-300 rounded-md border-[2px] "
              />
            </div>
            <div>
              <button className="bg-blue-500 py-1 rounded-2xl px-6 m-4 text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
