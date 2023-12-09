import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
const EditForm = () => {
  const [formErrors, setFormErrors] = useState({});

  const [formData, setFormData] = useState({
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

  const validateForm = (geneData) => {
    const errors = {};

    if (!geneData.gene_name.trim()) {
      errors.gene_name = "Gene Name is required";
    }

    if (!geneData.gene_family.trim()) {
      errors.gene_family = "Gene Family is required";
    }

    if (!geneData.protien_accession_number.trim()) {
      errors.protien_accession_number = "Protein Accession Number is required";
    }

    if (!geneData.nucleotide_accession_number.trim()) {
      errors.nucleotide_accession_number =
        "Nucleotide Accession Number is required";
    }

    if (!geneData.gene_accession_number.trim()) {
      errors.gene_accession_number = "Gene Accession Number is required";
    }

    if (!geneData.protien_link.trim()) {
      errors.protien_link = "Protein Link is required";
    }

    if (!geneData.nucleotide_link.trim()) {
      errors.nucleotide_link = "Nucleotide Link is required";
    }

    if (!geneData.gene_link.trim()) {
      errors.gene_link = "Gene Link is required";
    }

    if (!geneData.exon_count.trim()) {
      errors.exon_count = "Exon Count is required";
    }

    if (!geneData.gene_expansion.trim()) {
      errors.gene_expansion = "Gene Expansion is required";
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    //alert("djkjdkf");
    if (Object.keys(errors).length === 0) {
      // Form is valid, handle submission
      try {
        const response = await axios.post(
          `http://localhost:4000/updatedata/${id}`,
          formData
        );
        toast.success("Data successfully update");
        navigate("/Home");
      } catch (error) {
        console.error(error);
        toast.error("Failed to update data");
      }

      console.log(formData);
      // Reset form fields and errors
      setFormData({
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" bg-gradient-to-r from-[#4879be] via-[#3f6fb9] to-[#1d4f94] flex flex-col py-4">
      <Header />
      <div className="container  mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">
          Gene Information Form (Edit form)
        </h2>
        {/* {formData.length>0 && ( */}
        <form onSubmit={handleSubmit}>
          <label>
            Gene Name:
            <input
              type="text"
              value={formData.gene_name || ""}
              onChange={(e) =>
                setFormData({ ...formData, gene_name: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Gene Family:
            <input
              type="text"
              value={formData.gene_family || ""}
              onChange={(e) =>
                setFormData({ ...formData, gene_family: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Protein Accession No.
            <input
              type="text"
              value={formData.protien_accession_number || ""}
              onChange={(e) =>
                setFormData({ ...formData,protien_accession_number: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Nucleotide Accession no.
            <input
              type="text"
              value={formData.nucleotide_accession_number || ""}
              onChange={(e) =>
                setFormData({ ...formData, nucleotide_accession_number: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Gene Accession no.
            <input
              type="text"
              value={formData.gene_accession_number || ""}
              onChange={(e) =>
                setFormData({ ...formData, gene_accession_number: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Protein Link:
            <input
              type="text"
              value={formData.protien_link || ""}
              onChange={(e) =>
                setFormData({ ...formData, protien_link: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Nucleotide Link:
            <input
              type="text"
              value={formData.nucleotide_link || ""}
              onChange={(e) =>
                setFormData({ ...formData, nucleotide_link: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Gene Link:
            <input
              type="text"
              value={formData.gene_link || ""}
              onChange={(e) =>
                setFormData({ ...formData, gene_link: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
          Exon Count:
            <input
              type="text"
              value={formData.exon_count || ""}
              onChange={(e) =>
                setFormData({ ...formData, exon_count: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          
          <label>
            Gene Expansion:
            <input
              type="text"
              value={formData.gene_expansion || ""}
              onChange={(e) =>
                setFormData({ ...formData, gene_expansion: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Botanical Name:
            <input
              type="text"
              value={formData.botanical_name || ""}
              onChange={(e) =>
                setFormData({ ...formData, botanical_name: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Common Name:
            <input
              type="text"
              value={formData.common_name || ""}
              onChange={(e) =>
                setFormData({ ...formData, common_name: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          
          <label>
            Role of Gene:
            <input
              type="text"
              value={formData.role_of_gene || ""}
              onChange={(e) =>
                setFormData({ ...formData, role_of_gene: e.target.value })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <label>
            Interaction with Other Gene:
            <input
              type="text"
              value={formData.interaction || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  interaction: e.target.value,
                })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </label>
          <div>
            <label htmlFor="characterized_in_crop">
              Characterized in crop:
            </label>
            <input
              type="text"
              id="characterized_in_crop"
              name="characterized_in_crop"
              value={formData.characterized_in_crop}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  characterized_in_crop: e.target.value,
                })
              }
              className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="reference">reference:</label>
            <input
              type="text"
              id="reference"
              name="reference"
              value={formData.reference}
              onChange={(e) =>
                setFormData({ ...formData, reference: e.target.value })
              }
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md mt-6 hover:bg-blue-600 transition-colors duration-300"
          >
            Update
          </button>
        </form>

        {/* ) } */}
      </div>
    </div>
  );
};

export default EditForm;
