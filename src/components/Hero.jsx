import React from "react";

const Hero = () => {
  return (
    <header className="w-full h-96 background-style bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
          ENJOY THE PLEASURE OF 
          <span className="text-amber-500"> MATE</span>
        </h1>
        <p className="mt-5 text-center text-lg text-white">
          Want to prepare a really taste mate?
        </p>
        <a
          className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
          href="#"
        >
         Click here
        </a>
      </div>
    </header>
  );
};

export default Hero;
