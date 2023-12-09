import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [expandedTitleId, setExpandedTitleId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const entriesPerPage = 10; // Set the number of entries to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getdata");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  
    const filteredResults = data.filter((item) => {
      if (selectedCategory === 'Gene Family') {
        return item.gene_family.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (selectedCategory === 'Common Name') {
        return item.common_name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (selectedCategory === '' || item.category === selectedCategory) {
        return (
          item.gene_family.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.common_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return false;
    });
  
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset the current page when the search term changes
  };
  
  

  const toggleExpand = (titleId) => {
    setExpandedTitleId((prevId) => (prevId === titleId ? null : titleId));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
const deleteEntery= async(id)=>{
  await axios.delete(`http://localhost:4000/deletepost/${id}`);
  setData((prevData) => prevData.filter((d) => d.id !== id));
  setSearchResults((prevData) => prevData.filter((d) => d.id !== id));
  toast.success("Sucessfully deleted");
}

const navigate = useNavigate();
const updateData=(id)=>{
navigate("/editForm", { state: { id:id } })
}

  const renderTitles = () => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    const titlesToRender = searchResults.slice(startIndex, endIndex);
    

    if (titlesToRender.length === 0 && searchTerm === '') {
      return data.map((item) => (
        <li
          key={item.id}
          className={`${
            expandedTitleId === item.id ? 'bg-blue-100' : 'bg-white'
          } rounded-lg p-4 mb-2 cursor-pointer transition-colors duration-300 ease-in-out border border-gray-300`}
          onClick={() => toggleExpand(item.id)}
        >
          <a
            href="#"
            className={`text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300 ease-in-out`}
          >
            Gene Family Name: {" "}
            {item.gene_family}
          </a>
          {expandedTitleId === item.id && (
             <div className="mt-2">
             <p className="text-gray-700"><span className='font-semibold'>Gene Name:</span> {item.gene_name}</p>
             <p className="text-gray-700"><span className='font-semibold'>Gene Family:</span> {item.gene_family}</p>
             <p className="text-gray-700"><span className='font-semibold'>Gene Expansion:</span> {item.gene_expansion}</p>
             <p className="text-gray-700"><span className='font-semibold'>Genomic ID:</span> {item.genomic_id}</p>
             <p ><span className='font-semibold'>NCBI Link:</span> <a className='text-primary' href={item.ncbi_link} >{item.ncbi_link}</a></p>
             <p className="text-gray-700"><span className='font-semibold'>mRNA ID:</span> <a >{item.mrna_id}</a></p>
             <p className=""><span className='font-semibold'>NCBI Link2:</span> <a className='text-primary' href={item.ncbi_link2}>{item.ncbi_link2}</a></p>
             <p className="text-gray-700"><span className='font-semibold'>Protein ID:</span> <a>{item.protein_id}</a></p>
             <p className=""><span className='font-semibold'>NCBI Link3:</span> <a className='text-primary' href={item.ncbi_link3}>{item.ncbi_link3}</a></p>
             <p className="text-gray-700"><span className='font-semibold'>CDS ID: </span><a>{item.cds_id}</a></p>
             <p className=""><span className='font-semibold'>NCBI Link4:</span> <a className='text-primary' href={item.ncbi_link4}>{item.ncbi_link4}</a></p>
             <p className="text-gray-700"><span className='font-semibold'>Botanical Name:</span> {item.botanical_name}</p>
             <p className="text-gray-700"><span className='font-semibold'>Common Name:</span> {item.common_name}</p>
             <p className="text-gray-700"><span className='font-semibold'>Expression Tissue:</span> {item.expression_tissue}</p>
             <p className="text-gray-700"><span className='font-semibold'>Role of Gene:</span> {item.role_of_gene}</p>
             <p className="text-gray-700"><span className='font-semibold'>Interaction with Other Gene:</span> {item.interaction_with_other_gene}</p>
             <p className="text-gray-700"><span className='font-semibold'>characterized_in_crop_name:</span> {item.characterized_in_crop_name}</p>
             <p className="text-gray-700"><span className='font-semibold'>Orthology:</span><a href={item.orthology}>{item.orthology}</a> </p>
             <p className="text-gray-700"><span className='font-semibold'>Doi:</span> {item.doi}</p>
             <button className='flex justify-center bg-blue-950 w-full mb-2 mt-2 ' onClick={()=>updateData(item.id)}>Edit</button>
            <button className='flex justify-center bg-rose-600 w-full' onClick={()=>deleteEntery(item.id)}>Delete</button>
           </div>
          )}
        </li>
      ));
    } else if (titlesToRender.length > 0) {
      return titlesToRender.map((item) => (
        <li
          key={item.id}
          className={`${
            expandedTitleId === item.id ? 'bg-blue-100' : 'bg-white'
          } rounded-lg p-4 mb-2 cursor-pointer transition-colors duration-300 ease-in-out border border-gray-300`}
          onClick={() => toggleExpand(item.id)}
        >
          <a
            href="#"
            className={`text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300 ease-in-out`}
          >
            Gene Family Name: {" "}
            {item.gene_family}
          </a>
          {expandedTitleId === item.id && (
               <div className="mt-2">
               <p className="text-gray-700"><span className='font-semibold'>Gene Name:</span> {item.gene_name}</p>
               <p className="text-gray-700"><span className='font-semibold'>Gene Family:</span> {item.gene_family}</p>
               <p className="text-gray-700"><span className='font-semibold'>Gene Expansion:</span> {item.gene_expansion}</p>
               <p className="text-gray-700"><span className='font-semibold'>Genomic ID:</span> {item.genomic_id}</p>
               <p ><span className='font-semibold'>NCBI Link:</span> <a className='text-primary' href={item.ncbi_link} >{item.ncbi_link}</a></p>
               <p className="text-gray-700"><span className='font-semibold'>mRNA ID:</span> <a >{item.mrna_id}</a></p>
               <p className=""><span className='font-semibold'>NCBI Link2:</span> <a className='text-primary' href={item.ncbi_link2}>{item.ncbi_link2}</a></p>
               <p className="text-gray-700"><span className='font-semibold'>Protein ID:</span> <a>{item.protein_id}</a></p>
               <p className=""><span className='font-semibold'>NCBI Link3:</span> <a className='text-primary' href={item.ncbi_link3}>{item.ncbi_link3}</a></p>
               <p className="text-gray-700"><span className='font-semibold'>CDS ID: </span><a>{item.cds_id}</a></p>
               <p className=""><span className='font-semibold'>NCBI Link4:</span> <a className='text-primary' href={item.ncbi_link4}>{item.ncbi_link4}</a></p>
               <p className="text-gray-700"><span className='font-semibold'>Botanical Name:</span> {item.botanical_name}</p>
               <p className="text-gray-700"><span className='font-semibold'>Common Name:</span> {item.common_name}</p>
               <p className="text-gray-700"><span className='font-semibold'>Expression Tissue:</span> {item.expression_tissue}</p>
               <p className="text-gray-700"><span className='font-semibold'>Role of Gene:</span> {item.role_of_gene}</p>
               <p className="text-gray-700"><span className='font-semibold'>Interaction with Other Gene:</span> {item.interaction_with_other_gene}</p>
               <p className="text-gray-700"><span className='font-semibold'>characterized_in_crop_name:</span> {item.characterized_in_crop_name}</p>
               <p className="text-gray-700"><span className='font-semibold'>Orthology:</span><a href={item.orthology}>{item.orthology}</a> </p>
               <p className="text-gray-700"><span className='font-semibold'>Doi:</span> {item.doi}</p>
               <button className='flex justify-center bg-blue-950 w-full mb-2 mt-2 ' onClick={()=>updateData(item.id)}>Edit</button>
              <button className='flex justify-center bg-rose-600 w-full' onClick={()=>deleteEntery(item.id)}>Delete</button>
             </div>
          )}
        </li>
      ));
    } 
    else {
      return <p>No results found.</p>;
    }
  };

  
  const totalPages = Math.ceil(searchResults.length / entriesPerPage);

  const renderPagination = () => {
    if (totalPages > 1) {
      const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

      return (
        <div className="mt-4">
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`px-3 py-2 mx-1 rounded ${
                pageNumber === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
<Header/>
    <div className="flex bg-gradient-to-r from-[#F0E7C8] via-[#FDF8E5] to-[#A4A890] justify-center">
    
      <div className="w-2/3">
        <div className="flex justify-center items-center mb-4 mt-4">
          <select
            className="w-1/6 bg-white border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Gene Family">Gene Family</option>
            <option value="Common Name">Common Name</option>
    
            {/* Add more category options */}
          </select>
          <input
            type="text"
            className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div>
          <ul>{renderTitles()}</ul>
          
          {data.length > entriesPerPage && renderPagination()}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Search;
