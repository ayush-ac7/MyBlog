import { useState } from "react";
import MyBlogs from "./MyBlogs";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, description, author };
    setSubmitted(blog);
    setIsPending(true);
    console.log(blog);
    setTitle("");
    setDescription("");
    setAuthor("");
  };

  const blog = { title, description, author };

  return (
    <div>
      <div className="bg-black py-10 px-4 mx-auto">
        <div className="text-white text-center">
          <h1 className="text-6xl text-orange-500 font-bold pb-6">
            Write your Blog...
          </h1>
        </div>
      </div>

      <div className="write-blog text-center p-2 my-4">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-gray-300  bg-gray-200 rounded-md border-[2px] my-2 p-2"
            />
          </div>
          <div>
            <textarea
              className="w-[350px] h-[200px] border-[2px] rounded-lg border-gray-300 bg-gray-200  my-2 p-2"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-gray-300 rounded-md border-[2px] p-2 bg-gray-200 "
            />
          </div>
          <div>
            <button className="bg-blue-500 py-2 rounded-xl px-7 m-4 text-white hover:opacity-80">
              Submit
            </button>
          </div>
        </form>
      </div>

      {submitted && <MyBlogs submitValue={submitted} />}
    </div>
  );
};

export default AddBlog;
