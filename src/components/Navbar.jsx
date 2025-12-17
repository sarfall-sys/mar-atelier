import { FiScissors } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import routes from "../utils/dataLoader";
function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md px-4 py-3">
        {/*Container */}
        <div className="">
          {/*Logo */}
          <Link to="/" className="flex items-center gap-2">
            <FiScissors size={24} className="text-primary-dark" />
            <h1>
              <span className="font-elegant text-primary-dark">Mar</span>Atelier
            </h1>
          </Link>

          {/*DESKTOP NAVIGATION */}
          <div className="hidden md:flex space-x-6">
            <div className="flex justify-center space-x-4">
              {
                routes.routes.map((route, index) => {
                  if (route.name === "Home") return null;
                  return (
                    <Link
                      key={index}
                      to={route.path}
                      className="hover:text-primary-dark"
                    >
                      {route.name}
                    </Link>
                  );
                })
              }
            
            </div>
          </div>

          {/*MOBILE NAVIGATION */}
          {/*Menu */}

          <div className="md:hidden">
            <div className="bg-primary">
              <button onClick={handleMenuToggle} className="text-white p-2">
                <BiMenu size={24} />
              </button>
              {isMobileOpen && (
                <div className="flex flex-col p-4 space-y-4 bg-white shadow-md">
                  {routes.map((route, index) => { 
                    if (route.name === "Home") return null;
                    return (
                      <Link
                        key={index}
                        to={route.path}
                        className="hover:text-primary-dark" 
                      >
                        {route.name}
                      </Link>
                    );
                  })}

                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
