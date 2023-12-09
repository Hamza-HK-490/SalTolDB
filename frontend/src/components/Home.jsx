import React, { useState } from 'react';
import Header from "./Header";
import Table from './Table';

const Home = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleTextDisplay = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="bg-gradient-to-r from-[#F0E7C8] via-[#FDF8E5] to-[#A4A890] min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-10 md:py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-gray-900">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className={`text-center text-base md:text-lg lg:text-xl leading-relaxed text-gray-800 ${showFullText ? 'block' : 'truncate'}`}>HeatGen is a comprehensive research tool and database designed to study and understands the mechanisms of heat stress response in plants. It provides valuable insights into the genes and gene families involved in plants' ability to withstand high temperatures.   </p>
          {showFullText ? (
            <>
            <p className="text-center text-base md:text-lg lg:text-xl leading-relaxed text-gray-800">
              The HeatGen database is manually curated and includes extensive information about functionally characterized genes related to heat and stress tolerance. After conducting an extensive literature review spanning from 2000 to 2023, an exhaustive compilation of 155 thermotolerant genes from 46 plant species has been meticulously assembled. These genes, classified into 64 distinct gene families, provide a comprehensive understanding of the genetic mechanisms. It covers various gene families, including Heat Shock Factors (HSFs) and Heat Shock Proteins (HSPs).The main goal of HeatGen is to offer researchers access to a wealth of knowledge about heat-responsive genes. It consolidates information on genes involved in heat stress response, providing details about their functional characterization and roles in the heat stress response. Additionally, HeatGen provides information on orthologe genes, allowing for the exploration of heat response mechanisms across different plant species. Researchers can use HeatGen as a valuable tool to explore orthologs of heat stress-related genes and conduct comparison-based analysis. The database facilitates the interpretation of new experimental results on a genome-wide scale, contributing to the advancement of molecular heat response studies in crops. Overall, HeatGen is a valuable resource for understanding the molecular mechanisms of heat stress tolerance and improving crop productivity under challenging environmental conditions.
            </p>
            <button
            className="mt-4 text-blue-600 underline tracking-tight leading-tight text-lg"
            onClick={toggleTextDisplay}
          >
            See Less
          </button>
            </>
          ) : (
            <button
              className="mt-4 text-blue-600 underline tracking-tight leading-tight text-lg"
              onClick={toggleTextDisplay}
            >
              See More
            </button>
          )}
        </div>
        <div className="">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;