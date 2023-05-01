import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Header.css";
import Search from "../Search";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const ShowSearch = () => {
    setShowSearch(!showSearch);
    document.querySelector(".searchBox").focus();
  };
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const navLinks = [
    {
      link: "Home",
      to: "/",
    },
    {
      link: "Latest",
      to: "/latest",
    },
    {
      link: "Trending",
      to: "/trending",
    },
    {
      link: "Sports",
      to: "/sports",
    },
    {
      link: "World",
      to: "/world",
    },
    {
      link: "Entertainment",
      to: "/entertainment",
    },
    {
      link: "Health",
      to: "/health",
    },
    {
      link: "Business",
      to: "/business",
    },
    {
      link: "Education",
      to: "/education",
    },
    {
      link: "Politics",
      to: "/politics",
    },
    {
      link: "Techonology",
      to: "/techonology",
    },
  ];
  return (
    <header>
      <nav>
        <div className="Logo_search">
          <div className="Logo_search_inner">
            <HiOutlineMenuAlt2
              className={`${showMenu ? "Hamhide" : ""} hamshow `}
              onClick={ShowMenu}
            />
            <RxCross1
              className={`${showMenu ? "" : "Hamhide"} hamshow `}
              onClick={ShowMenu}
            />
            <h1>.News Pulse</h1>
            <div className="Search" onClick={ShowSearch}>
              <Search />
            </div>
          </div>
          <div className={`${showSearch ? "show" : ""} search_box `}>
            <Search/>
          </div>
        </div>
        <div
          className={`Category_list1 ${showMenu ? "show" : ""} Category_list `}
        >
          <ul>
            {navLinks.map((value, index) => {
              return (
                <li key={index}>
                  <NavLink to={value.to}>{value.link}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
