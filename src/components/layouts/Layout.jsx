import { Outlet } from "react-router-dom"; // Import Outlet for rendering child routes
import Navbar from "../Navbar"; // Import Navbar component
import Footer from "../Footer";
function Layout() {
  return (
    <>
      <div className=" ">
        <Navbar /> {/* Render navbar */}
        <main className=" mx-auto px-4 py-8">
          {/* Outlet renders the matched child route component */}
          <Outlet />
        </main>
        <Footer /> {/* Render footer */}
      </div>
    </>
  );
}

export default Layout;
