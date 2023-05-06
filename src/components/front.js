import "../App.css";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import "./front.css";

import React, { useState } from "react";
import videoBg from "../assets/videohome.mp4";

const Front = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="main1">
      <div className="overlay1"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="search-box">
        <form>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              onClick={handleSearchClick}
            />
            <button type="submit">Go</button>
          </div>
          {showDropdown && (
            <div className="dropdown">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Front;
