import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMediaLinksDiv">
        <ul>
          <li>
            <a href="https://www.facebook.com/blokhin.sergey.3?ref=bookmarks">
              <i className="fab fa-facebook-square mr-1" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/keiblokhin/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Designed By Kei Blokhin</p>
      </div>
    </div>
  );
};

export default Footer;
