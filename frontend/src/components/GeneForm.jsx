import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
const GeneForm = () => {
  const [geneData, setGeneData] = useState({
    gene_name: "",
    gene_family: "",
    protien_accession_number: "",
    nucleotide_accession_number: "",
    gene_accession_number: "",
    protien_link: "",
    nucleotide_link: "",
    gene_link: "",
    exon_count: "",
    gene_expansion: "",
    botanical_name: "",
    comman_name: "",
    role_of_gene: "",
    interaction: "",
    characterized_in_crop: "",
    reference: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      try {
        const response = await axios.post(
          "http://localhost:4000/insertdata",
          geneData
        );
        toast.success("Data successfully inserted");
        navigate("/Home");
      } catch (error) {
        console.error(error);
        toast.error("Failed to insert data");
      }

      console.log(geneData);
      // Reset form fields and errors
      setGeneData({
        gene_name: "",
        gene_family: "",
        protien_accession_number: "",
        nucleotide_accession_number: "",
        gene_accession_number: "",
        protien_link: "",
        nucleotide_link: "",
        gene_link: "",
        exon_count: "",
        gene_expansion: "",
        botanical_name: "",
        comman_name: "",
        role_of_gene: "",
        interaction: "",
        characterized_in_crop: "",
        reference: "",
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

  const validateForm = (geneData) => {
    const errors = {};

    if (!geneData.gene_name.trim()) {
      errors.gene_name = "Gene Name is required";
    }

    if (!geneData.gene_family.trim()) {
      errors.gene_family = "Gene Family is required";
    }

    if (!geneData.gene_expansion.trim()) {
      errors.gene_expansion = "Gene Expansion is required";
    }

    if (!geneData.gene_accession_number.trim()) {
      errors.gene_accession_number = "Gene Accession Number is required";
    }

    if (!geneData.gene_link.trim()) {
      errors.gene_link = "Gene Link is required";
    }

    if (!geneData.nucleotide_accession_number.trim()) {
      errors.nucleotide_accession_number =
        "Nucleotide Accession Number is required";
    }

    if (!geneData.nucleotide_link.trim()) {
      errors.nucleotide_link = "Nucleotide Link is required";
    }

    if (!geneData.protien_accession_number.trim()) {
      errors.protien_accession_number = "Protein Accession Number is required";
    }

    if (!geneData.protien_link.trim()) {
      errors.protien_link = "Protein Link is required";
    }

    if (!geneData.exon_count.trim()) {
      errors.exon_count = "Exon Count is required";
    }

    if (!geneData.botanical_name.trim()) {
      errors.botanical_name = "Botanical Name is required";
    }

    if (!geneData.comman_name.trim()) {
      errors.comman_name = "Common Name is required";
    }

    if (!geneData.role_of_gene.trim()) {
      errors.role_of_gene = "Role of Gene is required";
    }

    if (!geneData.interaction.trim()) {
      errors.interaction = "Interaction is required";
    }

    if (!geneData.characterized_in_crop.trim()) {
      errors.characterized_in_crop = "Characterized in Crop is required";
    }

    if (!geneData.reference.trim()) {
      errors.reference = "Reference is required";
    }

    // Add more validation rules for other fields

    return errors;
  };


  
  return (
    <div
      className='bg-gradient-to-r from-[#4879be] via-[#3f6fb9] to-[#1d4f94] flex flex-col py-4"
    style={{
      backgroundRepeat: "repeat",
      backgroundSize: "auto auto", // This ensures the image is not stretched
    }}'
    >
      <Header />
      <div className="container mx-auto px-4 py-8 ">
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
            <label htmlFor=" protien_accession_number">
              Protein Accession No.
            </label>
            <input
              type="text"
              id=" protien_accession_number"
              name=" protien_accession_number"
              value={geneData.protien_accession_number}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nucleotide_accession_number">
              Nucleotide Accession no.
            </label>
            <input
              type="text"
              id="nucleotide_accession_number"
              name="nucleotide_accession_number"
              value={geneData.nucleotide_accession_number}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="gene_accession_number">Gene Accession no.</label>
            <input
              type="text"
              id="gene_accession_number"
              name="gene_accession_number"
              value={geneData.gene_accession_number}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="protein_link">Protein Link:</label>
            <input
              type="text"
              id="protein_link"
              name="protein_link"
              value={geneData.protein_link}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="nucleotide_link">Nucleotide Link:</label>
            <input
              type="text"
              id="nucleotide_link"
              name="nucleotide_link"
              value={geneData.nucleotide_link}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="gene_link">Gene Link:</label>
            <input
              type="text"
              id="gene_link"
              name="gene_link"
              value={geneData.gene_link}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="exon_count">Exon Count:</label>
            <input
              type="text"
              id="exon_count"
              name="exon_count"
              value={geneData.exon_count}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor=" gene_expansion ">Gene Expansion:</label>
            <input
              type="text"
              id=" gene_expansion "
              name=" gene_expansion "
              value={geneData.gene_expansion}
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
            <label htmlFor="comman_name">Common Name:</label>
            <input
              type="text"
              id="comman_name"
              name="comman_name"
              value={geneData.comman_name}
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
            <label htmlFor="interaction">Interaction with Other Gene:</label>
            <input
              type="text"
              id="interaction"
              name="interaction"
              value={geneData.interaction}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="characterized_in_crop">
              Characterized in crop:
            </label>
            <input
              type="text"
              id="characterized_in_crop"
              name="characterized_in_crop"
              value={geneData.characterized_in_crop}
              onChange={handleChange}
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="reference">Reference:</label>
            <input
              type="text"
              id="reference"
              name="reference"
              value={geneData.reference}
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeneForm;
