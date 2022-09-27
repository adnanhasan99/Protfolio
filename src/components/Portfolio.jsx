import React from "react";
import codeEditor from "../assets/portfolio/1.png";
import portfolioWeb from "../assets/portfolio/2.png";
import gymReg from "../assets/portfolio/3.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: codeEditor,
      demo:1,
      code:"https://github.com/adnanhasan99/Restaurent"
    },
    {
      id: 2,
      src: portfolioWeb,
      demo:"",
      code:"https://github.com/adnanhasan99/barbershop"
    },
    {
      id: 3,
      src: gymReg,
      demo:"",
      code:"https://github.com/adnanhasan99/quetube999"
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full pt-32 pb-30" 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href ={code}>Demo</a> 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href ={code}>Code</a> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
