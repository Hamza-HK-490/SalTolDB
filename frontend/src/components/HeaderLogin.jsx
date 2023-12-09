import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    //bg-gradient-to-r from-[#F0E7C8] via-[#FDF8E5] to-[#A4A890] py-4
    <header className="bg-gradient-to-r from-[#4879be] via-[#3f6fb9] to-[#1d4f94] flex flex-col py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <Link to="/" className="flex flex-row justify-center">
            <img src=".././public/logo.png" alt="Logo" className="h-24 w-24  mr-2 h-" />

            <h1 className="text-black font-semibold text-2xl  tracking-tight leading-tight mt-8">
              SalTolDB
            </h1>
          </Link>

          <Link
            className="text-black font-semibold text-xl  tracking-tight leading-tight  ml-8"
            to="/AboutUs"
          >
            About Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
