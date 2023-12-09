import React from "react";
import Header from "./HeaderLogin";
const AboutLogin = () => {
  return (
    <div className="bg-bg1 bg-cover min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 text-gray-900">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto bg-white bg-opacity-50 p-10">
          <p className="text-justify text-base md:text-lg lg:text-xl leading-relaxed text-black">
          A major abiotic stress brought on by Climate Change, high salt, chloride, and concentration of ions increases, is salinity stress. Even though many genes in Arabidopsis thaliana have been linked to the ability to withstand salinity stress, there is still a need for a centralized database to compile this data. In order to meet the requirement for a comprehensive database to record and manage gene information relevant to salinity stress tolerance, we created web application named SalTolDb. <br /><br />

SalTolDb acts as a comprehensive database for managing gene data associated with Salinity stress. It provides a user-friendly platform for scientists and researchers to access, investigate, and add to the knowledge of genes connected to salinity, thereby assisting in the comprehension and improvement of salinity stress. The ultimate ambition of this research was to construct a user-friendly, accessible database that researchers can utilize for exploring and understanding the genetic underpinnings of salinity stress tolerance. <br /><br />

In essence, this study's creation of a comprehensive salinity stress tolerance database, complete with detailed gene information and accessible through a user-friendly interface, contributes significantly to the pursuit of crop improvement and the development of salt-tolerant varieties. This resource stands to facilitate groundbreaking research in the field, ultimately leading to the e hancement of agricultural productivity and resilience in the face of salinity stress challenges. 

 {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutLogin;
