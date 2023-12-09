import React,{useState} from "react";

import { Link, useNavigate } from "react-router-dom";

function Header() {


  return (
    <header className="bg-gradient-to-r from-[#4879be] via-[#3f6fb9] to-[#1d4f94] flex flex-col py-4">
      <div className="container mx-auto flex items-center justify-between">
       
        <div className="flex items-center cursor-pointer" >
          <Link  className="flex flex-row" to="/Home">

          <img src=".././public/logo.png" alt="Logo" className="h-12 mr-2" />
         
          <h1  className="text-black font-semibold text-2xl  tracking-tight leading-tight mt-2" >HeatGen</h1>
          </Link>
         
        <Link  className="text-black font-semibold text-xl  tracking-tight leading-tight  ml-8" to="/geneForm" >Add</Link>
        <Link  className="text-black font-semibold text-xl  tracking-tight leading-tight  ml-8" to="/Search" >Search</Link>
        </div>
        
        <Link className="text-white font-semibold text-lg ml-8 tracking-tight leading-tight hover:text-green-700 " to="/">Log Out</Link>
      </div>
    </header>
  );
}

export default Header;
