import React from 'react'
import TopNavbar from './components/Navbar'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
const App = () => {
  return (
    <div >
      <TopNavbar/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App

