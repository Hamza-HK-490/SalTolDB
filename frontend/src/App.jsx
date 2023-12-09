import { useState } from 'react'
import AccountRegister from './components/AccountRegister'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Search from './components/Search';
import GeneForm from './components/GeneForm';
import EditForm from './components/EditForm';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import AboutLogin from './components/AboutLogin';
import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  return (
    <>
    
    
  
  <ToastContainer />
  <main>
{/* <SearchBar/> */}
{/* <GeneForm/> */}

   <Routes>
  
   
  
    
    <Route exact  path="/" element={<LoginForm/>} />
    <Route path="/AccountRegister" element={<AccountRegister/>} />
    <Route path="/Search" element={<Search/>} />
    <Route path="/editForm" element={<EditForm/>} />
    <Route path="/geneForm" element={<GeneForm/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="/AboutUs" element={<AboutLogin/>} />
      </Routes> 

  </main>
</>
  )
}

export default App
