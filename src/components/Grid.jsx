import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiShareForwardFill } from "react-icons/ri";

const Grid = ({ category, heading }) => {
  const [articles, setArticles] = useState([]);
  const [show, setShow] = useState(10);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${category}&apiKey=e9565a9f001d473a9a9a613e7f9cc76d`,
    })
      .then((res) => {
        setArticles(res.data.articles);
        // console.log(res.data.articles);
      })
      .catch((e) => console.log(e));
  }, []);
 

  return (
    <>
      <div className="w-[80%] mx-auto my-10 flex justify-between items-center">
        <h1 className=" text-xl md:text-4xl">{heading}</h1>
        <button
          className="border-black border-2 px-3 py-2  hover:bg-black hover:text-white"
          onClick={() => {
            setShow(20);
          }}
        >
          Show more
        </button>
      </div>

      <div className="showcase ">
        {articles.map((value, index) => {
          const { author, publishedAt, urlToImage, title, url } = value;
          if (urlToImage != null && index < show) {
            return (
              <div className=" relative  w-[100%]" key={index}>
                <div
                  className="w-[100%] md:w-[300px] h-[350px] cursor-pointer bg-white p-5 rounded-md"
                  onClick={() => {
                    window.open(url, "_blank");
                  }}
                >
                  <div
                    className="w-[100%] h-[200px] rounded-md "
                    style={{
                      backgroundImage: `url(${urlToImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                  >
                    <div className="main-button p-2 absolute top-8 right-7 bg-slate-400 rounded-2xl hover:bg-blue-400">
                      <RiShareForwardFill />
                    </div>
                  </div>
                  <h1 className="headline mt-2 text-lg  ">{title}</h1>
                  <p className="mt-5 flex justify-between items-center ">
                    <span className="author">{author}</span>
                    <span>{publishedAt.slice("0", "10")}</span>
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default Grid;
