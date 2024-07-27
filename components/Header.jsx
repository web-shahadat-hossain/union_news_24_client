import React from "react";
import moment from "moment";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import bg_header from "../assets/header-bg.jpg";
import "moment/locale/bn"; // Import Bangla locale

const Header = () => {
  moment.locale("bn");

  // Get current date and format it
  const formattedDate = moment().format("LLLL");
  return (
    <div>
      <div className="px-5 lg:px-8 flex justify-between items-center bg-[#333333] text-[#cccccc]">
        <span className="text-[13px] font-medium">{formattedDate}</span>
        <div className="flex gap-x-[1px]">
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]"
            href=""
          >
            <FaFacebookF />
          </a>
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]"
            href=""
          >
            <AiOutlineTwitter />
          </a>
          <a
            className="w-[37px] h-[35px] flex justify-center items-center bg-[#ffffff2b]"
            href=""
          >
            <AiFillYoutube />
          </a>
        </div>
      </div>
      <div
        className="w-full h-[240px]"
        style={{
          backgroundImage: `url(${bg_header.src})`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Header;
