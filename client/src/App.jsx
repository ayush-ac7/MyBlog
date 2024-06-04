import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { BlogProvider } from "./utils/BlogContext";

const App = () => {
  return (
    <div>
      <BlogProvider>
        <Header />
        <Outlet />
      </BlogProvider>
    </div>
  );
};

export default App;
