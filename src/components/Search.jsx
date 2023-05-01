import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: `https://newsapi.org/v2/everything?q=${query}&apiKey=e9565a9f001d473a9a9a613e7f9cc76d`,
      // 076100563977443790ef9308246886d5
    }).then((res) => {
      setNews(res.data.articles);
    });
  }, [query]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    if(value<1){
      document.querySelector(".SearchRes").classList.add("hidden")
    }
    else{
      document.querySelector(".SearchRes").classList.remove("hidden") 
    }
  };

  let searchResults = null;
  if (news != undefined) {
    if (news.length > 0) {
      searchResults = (
        <ul className="SearchRes z-10  absolute  flex item-center gap-4 flex-col bg-white p-4 max-w-[400px] h-[300px] top-32  md:top-[4rem] md:right-10   overflow-y-scroll ">
          {news.slice("0", "5").map((news, index) => (
            <li 
              key={index}
              className="flex items-center bg-slate-400 p-3 rounded-md mb-1"
              onClick={() => {
                window.open(news.url, "_blank");
              }}
            >
              <img
                className="w-[100px] mr-4 "
                src={news.urlToImage}
                alt={news.title.slice("0", "5")}
              />
              <h5 >{news.title}</h5>
            </li>
          ))}
        </ul>
      );
    }
  } else {
    searchResults = <p>No news found!!!</p>;
  }
  return (
    <div className=" flex justify-center items-center ">
      <input
        className="searchBox   "
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <div className=" px-2 ">
      <BiSearchAlt className=""  />
      </div>

      {searchResults}
    </div>
  );
};

export default Search;
