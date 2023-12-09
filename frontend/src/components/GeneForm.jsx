import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './Header';
const GeneForm = () => {
    const [geneData, setGeneData] = useState({
        gene_name: '',
        gene_family: '',
        gene_expansion: '',
        genomic_id: '',
        ncbi_link: '',
        mrna_id: '',
        ncbi_link2: '',
        protein_id: '',
        ncbi_link3: '',
        cds_id: '',
        ncbi_link4: '',
        botanical_name: '',
        common_name: '',
        expression_tissue: '',
        role_of_gene: '',
        interaction_with_other_gene: '',
        characterized_in_crop_name: '',
        orthology: '',
        doi:''
      });
    
      const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
          // Form is valid, handle submission
          try {
            const response = await axios.post('http://localhost:4000/insertdata', geneData);
            toast.success('Data successfully inserted');
           navigate('/Home');
          } catch (error) {
            console.error(error);
            toast.error('Failed to insert data');
          }


          console.log(geneData);
          // Reset form fields and errors
          setGeneData({
            gene_name: '',
            gene_family: '',
            gene_expansion: '',
            genomic_id: '',
            ncbi_link: '',
            mrna_id: '',
            ncbi_link2: '',
            protein_id: '',
            ncbi_link3: '',
            cds_id: '',
            ncbi_link4: '',
            botanical_name: '',
            common_name: '',
            expression_tissue: '',
            role_of_gene: '',
            interaction_with_other_gene: '',
            characterized_in_crop_name: '',
            orthology: '',
            doi:''
          });
          setFormErrors({});
        } else {
          // Form has errors, update state with error object
          setFormErrors(errors);
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setGeneData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };


      const validateForm = () => {
        const errors = {};
      
        if (!geneData.gene_name.trim()) {
          errors.gene_name = 'Gene Name is required';
        }
      
        if (!geneData.gene_family.trim()) {
          errors.gene_family = 'Gene Family is required';
        }
      
        if (!geneData.gene_expansion.trim()) {
          errors.gene_expansion = 'Gene Expansion is required';
        }
      
        if (!geneData.genomic_id.trim()) {
          errors.genomic_id = 'Genomic ID is required';
        }
      
        if (!geneData.ncbi_link.trim()) {
          errors.ncmi_link = 'NCMI Link is required';
        }
      
        if (!geneData.mrna_id.trim()) {
          errors.mrna_id = 'mRNA ID is required';
        }
      
        if (!geneData.ncbi_link2.trim()) {
          errors.ncbi_link2 = 'NCBI Link 2 is required';
        }
      
        if (!geneData.protein_id.trim()) {
          errors.protein_id = 'Protein ID is required';
        }
      
        if (!geneData.ncbi_link3.trim()) {
          errors.ncbi_link3 = 'NCBI Link 3 is required';
        }
      
        if (!geneData.cds_id.trim()) {
          errors.cds_id = 'CDS ID is required';
        }
      
        if (!geneData.ncbi_link4.trim()) {
          errors.ncbi_link4 = 'NCBI Link 4 is required';
        }
      
        if (!geneData.botanical_name.trim()) {
          errors.botanical_name = 'Botanical Name is required';
        }
      
        if (!geneData.common_name.trim()) {
          errors.common_name = 'Common Name is required';
        }
      
        if (!geneData.expression_tissue.trim()) {
          errors.expression_tissue = 'Expression Tissue is required';
        }
      
        if (!geneData.role_of_gene.trim()) {
          errors.role_of_gene = 'Role of Gene is required';
        }
      
        if (!geneData.interaction_with_other_gene.trim()) {
          errors.interaction_with_other_gene = 'Interaction with Other Gene is required';
        }
      
        if (!geneData.characterized_in_crop_name.trim()) {
          errors.characterized_in_crop_name = 'Characterized with Other Gene is required';
        }
      
        if (!geneData.orthology.trim()) {
          errors.orthology = 'orthology is required';
        }
        if (!geneData.doi.trim()) {
          errors.doi = 'orthology is required';
        }
      
        // Add more validation rules for other fields
      
        return errors;
      };
      


  return (
    <div className='bg-gradient-to-r from-[#F0E7C8] via-[#FDF8E5] to-[#A4A890]'>
<Header/>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Gene Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="gene_name">Gene Name:</label>
          <input
            type="text"
            id="gene_name"
            name="gene_name"
            value={geneData.gene_name}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            
          />
        </div>
        <div>
          <label htmlFor="gene_family">Gene Family:</label>
          <input
            type="text"
            id="gene_family"
            name="gene_family"
            value={geneData.gene_family}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="gene_expansion">Gene Expansion:</label>
          <input
            type="text"
            id="gene_expansion"
            name="gene_expansion"
            value={geneData.gene_expansion}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="genomic_id">Genomic ID:</label>
          <input
            type="text"
            id="genomic_id"
            name="genomic_id"
            value={geneData.genomic_id}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="ncbi_link">NCBI Link:</label>
          <input
            type="text"
            id="ncbi_link"
            name="ncbi_link"
            value={geneData.ncbi_link}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mrna_id">mRNA ID:</label>
          <input
            type="text"
            id="mrna_id"
            name="mrna_id"
            value={geneData.mrna_id}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="ncbi_link2">NCBI Link 2:</label>
          <input
            type="text"
            id="ncbi_link2"
            name="ncbi_link2"
            value={geneData.ncbi_link2}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="protein_id">Protein ID:</label>
          <input
            type="text"
            id="protein_id"
            name="protein_id"
            value={geneData.protein_id}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="ncbi_link3">NCBI Link 3:</label>
          <input
            type="text"
            id="ncbi_link3"
            name="ncbi_link3"
            value={geneData.ncbi_link3}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="cds_id">CDS ID:</label>
          <input
            type="text"
            id="cds_id"
            name="cds_id"
            value={geneData.cds_id}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="ncbi_link4">NCBI Link 4:</label>
          <input
            type="text"
            id="ncbi_link4"
            name="ncbi_link4"
            value={geneData.ncbi_link4}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="botanical_name">Botanical Name:</label>
          <input
            type="text"
            id="botanical_name"
            name="botanical_name"
            value={geneData.botanical_name}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="common_name">Common Name:</label>
          <input
            type="text"
            id="common_name"
            name="common_name"
            value={geneData.common_name}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="expression_tissue">Expression Tissue:</label>
          <input
            type="text"
            id="expression_tissue"
            name="expression_tissue"
            value={geneData.expression_tissue}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="role_of_gene">Role of Gene:</label>
          <input
            type="text"
            id="role_of_gene"
            name="role_of_gene"
            value={geneData.role_of_gene}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="interaction_with_other_gene">Interaction with Other Gene:</label>
          <input
            type="text"
            id="interaction_with_other_gene"
            name="interaction_with_other_gene"
            value={geneData.interaction_with_other_gene}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="characterized_in_crop_name">Characterized in crop name:</label>
          <input
            type="text"
            id="characterized_in_crop_name"
            name="characterized_in_crop_name"
            value={geneData.characterized_in_crop_name}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="orthology">orthology:</label>
          <input
            type="text"
            id="orthology"
            name="orthology"
            value={geneData.orthology}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
<div>
        <label htmlFor="doi">doi:</label>
          <input
            type="text"
            id="doi"
            name="doi"
            value={geneData.doi}
            onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
       {/* Display form errors */}
         {Object.keys(formErrors).length > 0 && (
          <div className="text-red-500 mb-4">
            {Object.values(formErrors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <button type="submit"  className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 transition-colors duration-300">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default GeneForm;
