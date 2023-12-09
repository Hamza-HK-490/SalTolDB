import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './Header';
const EditForm = () => {
    
    const [formErrors, setFormErrors] = useState({});
    
    
  
    const [formData, setFormData] = useState({
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
      const [isLoading, setIsLoading] = useState(false);
      const location = useLocation();
      const id = location.state && location.state.id;
    
      useEffect(() => {
      //  fetchData();
      }, []);
    
      useEffect(() => {
        console.log(formData);
      }, [formData]);
    
      const fetchData = async () => {
        try {
          const response = await axios.post(`http://localhost:4000/editdata/${id}`);
          const fetchedData = response.data;
          setFormData(fetchedData);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    

    const validateForm = () => {
        const errors = {};
      
        if (!formData.gene_name) {
          errors.gene_name = 'Gene Name is required';
        }
      
        if (!formData.gene_family) {
          errors.gene_family = 'Gene Family is required';
        }
      
        if (!formData.gene_expansion) {
          errors.gene_expansion = 'Gene Expansion is required';
        }
      
        if (!formData.genomic_id) {
          errors.genomic_id = 'Genomic ID is required';
        }
      
        if (!formData.ncbi_link) {
          errors.ncmi_link = 'NCMI Link is required';
        }
      
        if (!formData.mrna_id) {
          errors.mrna_id = 'mRNA ID is required';
        }
      
        if (!formData.ncbi_link2) {
          errors.ncbi_link2 = 'NCBI Link 2 is required';
        }
      
        if (!formData.protein_id) {
          errors.protein_id = 'Protein ID is required';
        }
      
        if (!formData.ncbi_link3) {
          errors.ncbi_link3 = 'NCBI Link 3 is required';
        }
      
        if (!formData.cds_id) {
          errors.cds_id = 'CDS ID is required';
        }
      
        if (!formData.ncbi_link4) {
          errors.ncbi_link4 = 'NCBI Link 4 is required';
        }
      
        if (!formData.botanical_name) {
          errors.botanical_name = 'Botanical Name is required';
        }
      
        if (!formData.common_name) {
          errors.common_name = 'Common Name is required';
        }
      
        if (!formData.expression_tissue) {
          errors.expression_tissue = 'Expression Tissue is required';
        }
      
        if (!formData.role_of_gene) {
          errors.role_of_gene = 'Role of Gene is required';
        }
      
        if (!formData.interaction_with_other_gene) {
          errors.interaction_with_other_gene = 'Interaction with Other Gene is required';
        }
      
        if (!formData.characterized_in_crop_name.trim()) {
          errors.characterized_in_crop_name = 'Characterized with Other Gene is required';
        }
      
        if (!formData.orthology.trim()) {
          errors.orthology = 'orthology is required';
        }
        if (!formData.doi.trim()) {
          errors.doi = 'orthology is required';
        }
      
        
      
        return errors;
      };
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
          e.preventDefault();
          const errors = validateForm();
          //alert("djkjdkf");
        if (Object.keys(errors).length === 0) {
          // Form is valid, handle submission
          try {
        const response = await axios.post(`http://localhost:4000/updatedata/${id}`, formData);
            toast.success('Data successfully update');
           navigate('/Home');
          } catch (error) {
            console.error(error);
            toast.error('Failed to update data');
          }


          console.log(formData);
          // Reset form fields and errors
          setFormData({
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
    
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='bg-gradient-to-r from-[#F0E7C8] via-[#FDF8E5] to-[#A4A890]'>
        <Header/>
      <div className="container  mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Gene Information Form (Edit form)</h2>
        {/* {formData.length>0 && ( */}
        <form onSubmit={handleSubmit}>
          <label>
            Gene Name:
            <input
              type="text"
              value={formData.gene_name || ''}
              onChange={(e) => setFormData({ ...formData, gene_name: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Gene Family:
            <input
              type="text"
              value={formData.gene_family || ''}
              onChange={(e) => setFormData({ ...formData, gene_family: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Gene Expansion:
            <input
              type="text"
              value={formData.gene_expansion || ''}
              onChange={(e) => setFormData({ ...formData, gene_expansion: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Genomic ID:
            <input
              type="text"
              value={formData.genomic_id || ''}
              onChange={(e) => setFormData({ ...formData, genomic_id: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            NCBI Link:
            <input
              type="text"
              value={formData.ncbi_link || ''}
              onChange={(e) => setFormData({ ...formData, ncbi_link: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            mRNA ID:
            <input
              type="text"
              value={formData.mrna_id || ''}
              onChange={(e) => setFormData({ ...formData, mrna_id: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            NCBI Link 2:
            <input
              type="text"
              value={formData.ncbi_link2 || ''}
              onChange={(e) => setFormData({ ...formData, ncbi_link2: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Protein ID:
            <input
              type="text"
              value={formData.protein_id || ''}
              onChange={(e) => setFormData({ ...formData, protein_id: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            NCBI Link 3:
            <input
              type="text"
              value={formData.ncbi_link3 || ''}
              onChange={(e) => setFormData({ ...formData, ncbi_link3: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            CDS ID:
            <input
              type="text"
              value={formData.cds_id || ''}
              onChange={(e) => setFormData({ ...formData, cds_id: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            NCBI Link 4:
            <input
              type="text"
              value={formData.ncbi_link4 || ''}
              onChange={(e) => setFormData({ ...formData, ncbi_link4: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Botanical Name:
            <input
              type="text"
              value={formData.botanical_name || ''}
              onChange={(e) => setFormData({ ...formData, botanical_name: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Common Name:
            <input
              type="text"
              value={formData.common_name || ''}
              onChange={(e) => setFormData({ ...formData, common_name: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Expression Tissue:
            <input
              type="text"
              value={formData.expression_tissue || ''}
              onChange={(e) => setFormData({ ...formData, expression_tissue: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Role of Gene:
            <input
              type="text"
              value={formData.role_of_gene || ''}
              onChange={(e) => setFormData({ ...formData, role_of_gene: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Interaction with Other Gene:
            <input
              type="text"
              value={formData.interaction_with_other_gene || ''}
              onChange={(e) => setFormData({ ...formData, interaction_with_other_gene: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <div>
          <label htmlFor="characterized_in_crop_name">Characterized in crop name:</label>
          <input
            type="text"
            id="characterized_in_crop_name"
            name="characterized_in_crop_name"
            value={formData.characterized_in_crop_name}
            onChange={(e) => setFormData({ ...formData, characterized_in_crop_name: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="orthology">orthology:</label>
          <input
            type="text"
            id="orthology"
            name="orthology"
            value={formData.orthology}
            onChange={(e) => setFormData({ ...formData, orthology: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
<div>
        <label htmlFor="doi">doi:</label>
          <input
            type="text"
            id="doi"
            name="doi"
            value={formData.doi}
            onChange={(e) => setFormData({ ...formData, doi: e.target.value })}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

          {Object.keys(formErrors).length > 0 && (
          <div className="text-red-500 mb-4">
            {Object.values(formErrors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 transition-colors duration-300">Update</button>
        </form>
        
       {/* ) } */}
        
      </div>
      </div>
    );
  };
  
  export default EditForm;
  
