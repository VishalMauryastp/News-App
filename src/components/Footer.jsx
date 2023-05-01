import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-[80%] mx-auto my-0 py-10 px-3 flex justify-between flex-col md:flex-row   ">
        <div className="md:w-[40%]">
          <h1 className="text-white text-3xl text-center md:text-left ">.News Pulse</h1>
        </div>

        <div className="md:w-[40%] md:text-right ">
          <div className="footer_icon flex justify-between mx-auto my-0 mt-6 md:mt-0 md:ml-auto md:mr-0 text-white font-[2rem] max-w-[80%] md:max-w-[50%] md: ">
            <Link className=" text-[2rem] " to="#">
              <AiFillFacebook />
            </Link>
            <a className="text-[2rem] ml-2" href="#">
              <BsTwitter />
            </a>
            <a className="text-[2rem] ml-2" href="#">
              <BsPinterest />
            </a>
            <a className="text-[2rem] ml-2" href="#">
              <BsInstagram />
            </a>
          </div>
          <p className="text-white text-center   md:text-right flex justify-center  md:justify-end mt-7 md:mt-3">
            &#169; 2023 .NewsPulse.All rights reserved{" "}
            <br className="hidden md:block" /> by Vishal Maurya.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
