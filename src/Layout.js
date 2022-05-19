import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ width, posts, search, setSearch }) => {
  return (
    <div className="App">
      <Header width={width} title="Bloggy Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer posts={posts} />
    </div>
  );
};

export default Layout;
