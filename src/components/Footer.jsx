import React from "react";
import DataLoader from "../utils/dataLoader";
function Footer() {
  return <>
  <footer>
    <div className="bg-accent text-center text-white py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} MarAtelier. All rights reserved.</p>
    </div>
  </footer>
  </>;
}

export default Footer;
