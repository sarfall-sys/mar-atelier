import React from "react";
import DataLoader from "../utils/dataLoader";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const appData = DataLoader.getContactInfo();
  const socialMedia = appData.socialMedia;
  const iconsMap = {
    FaFacebookF: FaFacebookF,
    FaTwitter: FaTwitter,
    FaInstagram: FaInstagram,
    FaWhatsapp: FaWhatsapp,
  };

  console.log(socialMedia);
  return (
    <>
      <footer className="mt-12">
        <div className="bg-primary text-center text-neutral py-4 mt-8 flex grid-cols-2 justify-center items-center space-x-4">
          <p className="text-dark">
            &copy; {new Date().getFullYear()} MarAtelier. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4">
            {socialMedia.map((media, index) => {
              const IconComponent = iconsMap[media.icon];

              return (
                <a
                  href={media.url}
                  key={index}
                  className="p-2 text-dark hover:text-accent transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {IconComponent && <IconComponent size={24} />}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
