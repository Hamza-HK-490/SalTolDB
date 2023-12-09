import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";
import Header from "./HeaderLogin";

const AccountRegister = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
const navigate =useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  

    

  const handleRegister = async (e) => {
    e.preventDefault();
  
    setErrors({});
  
    const newErrors = {};
    if (!formData.fullname) {
      newErrors.fullname = "Full Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirm_password) {
      newErrors.confirm_password = "Confirm Password is required";
    }
    if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "Passwords do not match";
    }
  
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:4000/getemail", {
          email: formData.email,
        });
  
        if (response.data.length > 0) {
          toast.error("Account Already exists");
        } else {
          
              try {
                const response = await axios.post('http://localhost:4000/SignUpForm', formData);
                toast.success('Successfully Registered');
                navigate("/");
              } catch (error) {
                if (error.response && error.response.data) {
                  console.log(error.response.data.error);
               
                } else {
                  console.log("Error occurred during signup");
                }
              }
            
            
        }
      } catch (error) {
        if (error.response && error.response.data) {
          console.log(error.response.data.error);
        } else {
          console.log("Error occurred during signup");
        }
      }
    }
  };

  return (
    <div>
<Header/>
    <div className="bg-bg1 bg-cover min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form>
            {errors.fullname && (
              <p className="text-red-500 text-xs italic">{errors.fullname}</p>
            )}
            <input
              type="text"
              className={`block border ${
                errors.fullname ? "border-red-500" : "border-gray-300"
              } w-full p-3 rounded mb-4`}
              name="fullname"
              placeholder="Full Name"
              value={formData.fullname}
              onChange={handleChange}
            />

            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
            <input
              type="text"
              className={`block border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } w-full p-3 rounded mb-4`}
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
            <input
              type="password"
              className={`block border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } w-full p-3 rounded mb-4`}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />

            {errors.confirm_password && (
              <p className="text-red-500 text-xs italic">
                {errors.confirm_password}
              </p>
            )}
            <input
              type="password"
              className={`block border ${
                errors.confirm_password ? "border-red-500" : "border-gray-300"
              } w-full p-3 rounded mb-4`}
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
            />

            <Link
              type="submit"
              onClick={handleRegister}
              className="block w-full text-center py-3 rounded bg-[#A4A890] font-bold tracking-tight leading-tight text-white hover:bg-blue-700 focus:outline-none my-1"
            >
              Create Account
            </Link>

            <div className="text-center text-sm text-gray-700 mt-4">
              By signing up, you agree to the{" "}
              <a className="underline" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
              .
            </div>
          </form>
          <div className="text-gray-700 mt-6">
            Already have an account?{" "}
            <Link className="underline text-blue-500" to="/">
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountRegister;
