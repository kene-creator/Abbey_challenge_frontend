import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styles } from "../styles";
import search from "../assets/icons/search-normal.png";
import filter from "../assets/icons/filter.png";
import logo from "../assets/images/abbey.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className={`${styles.paddingX} w-full flex flex-col lg:flex-row items-center py-5 justify-center lg:justify-between bg-white`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-12">
        <div className="basis-[25%]">
          <a href="/" className="w-[70%]">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="relative w-full flex lg:block">
          <input
            type="text"
            placeholder="Search something here"
            className="border border-black-300 py-2 pl-12 pr-12 rounded-md lg:rounded-[2rem] focus:outline-none lg:w-[30rem] w-full"
          />
          <button className="absolute left-[1rem] top-[0.5rem]">
            <img src={search} alt="search icon" />
          </button>
          <button className="lg:absolute lg:right-[1rem] lg:top-[0.5rem] lg:border-0 lg:p-0 lg:ml-0 border border-black-300 p-1 ml-2">
            <img src={filter} alt="search icon" />
          </button>
        </div>
      </div>
      <div className="flex justify-center align-center gap-8 mt-4 lg:mt-0">
        <div className="flex gap-4 justify-center align-center">
          <div className="p-2 border border-black-300 rounded-full">
            <FavoriteIcon
              sx={{
                color: "#596780",
              }}
            />
          </div>
          <div className="p-2 border border-black-300 rounded-full">
            <NotificationsIcon
              sx={{
                color: "#596780",
              }}
            />
          </div>
          <div className="p-2 border border-black-300 rounded-full">
            <SettingsIcon
              sx={{
                color: "#596780",
              }}
            />
          </div>
        </div>
        <div>
          <Link to="/login">
            <button className="bg-blue-900 text-white rounded-lg py-2 px-4 hover:bg-blue-800 main_font">
              Login/Registration
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
