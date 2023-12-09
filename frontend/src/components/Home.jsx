import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
  };

  return (
    //bg-bg1 bg-cover min-h-screen flex flex-col bg-gradient-to-r from-[#F0E7C8] via-[#FDF8E5] to-[#A4A890] min-h-screen
    <div
      className="bg-gradient-to-r from-[#4879be] via-[#3f6fb9] to-[#1d4f94] flex flex-col py-4 "
      style={{
        backgroundRepeat: "repeat",
        backgroundSize: "auto auto", // This ensures the image is not stretched
      }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-10 md:py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-gray-900">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <p
            className={`text-justify text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 mb-4`}
          >
            SalTolDb: A Comprehensive Salinity Stress Tolerance Database, offers
            a comprehensive collection of information, with a particular focus
            on genes that help plants endure and resist salinity stress.
            SalTolDb is a useful tool for compiling and arranging data on genes
            in a centralized and approachable way.{" "}
          </p>
        </div>
        <div className="">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
