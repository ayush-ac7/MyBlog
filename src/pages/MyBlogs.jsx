const MyBlogs = ({submitValue}) => {
  return (
    <div>
      {/* <div className="bg-black py-24 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold pb-6">My Blogs</h1>
        </div>
      </div> */}
      <div className="w-[400px] h-[200px]  border-2 mx-auto p-4">
      <h1 className="font-mono py-2">Title: {submitValue.title}</h1>
      <p className="font-serif text-sm py-2">Description:{submitValue.description}</p>
      <h3 className="font-thin">author:{submitValue.author}</h3>
      </div>

    </div>
  );
};

export default MyBlogs;
