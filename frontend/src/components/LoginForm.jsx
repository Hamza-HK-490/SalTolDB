import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './HeaderLogin';
// import { useHistory } from 'react-router';
import axios from 'axios';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      
      // Reset form fields
      setFormData({ email: '', password: '' });
      setErrors({});
      try {
        const response = await axios.post('http://localhost:4000/login', formData)

        if(!response.data[0].username){

toast.error("Account not exit");
        }
        else{
toast.success("Sucessfully login");
          handleClick();
        }
        // Process the data further or update the component state
      } catch (error) {
        if (error.response && error.response.data) {
          console.log(error.response.data.error);
          toast.error("Account not exit");
         // alert(error.response.data.error); 
        } else {
          console.log("Login error occurred");
        }
        
      }
    }
  };
  const handleClick = () => {
   
    navigate('/Home');
  };
  return (
  <div >
<Header/>
    <div className="bg-bg1 bg-cover min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <form >
          {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
            <input
              type="email"
              className={`block border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
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
                errors.password ? 'border-red-500' : 'border-gray-300'
              } w-full p-3 rounded mb-4`}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
           
<div className='flex justify-center'>

            <Link
              onClick={handleSubmit}
              className="w-full text-center py-3 rounded bg-[#A4A890] tracking-tight leading-tight font-bold text-white hover:bg-green-700 focus:outline-none my-1"
            >
              Login
            </Link>
</div>
            <div className="text-gray-700 mt-6">
        do not have an account?{' '}
        <Link className="underline text-blue-500" to="/AccountRegister">
          SignUP
        </Link>
        .
      </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginForm;
