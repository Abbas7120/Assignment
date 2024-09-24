import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

   
const Footer = () => {

      return (
        <footer className="py-9">
              <div className="w-full border-5 border-blue-700"></div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          

         

          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black  no-underline">Innovation</a></li>
              <li><a href="#" className="text-black  no-underline">Business Service</a></li>
              <li><a href="#" className="text-black no-underline">Financial Service</a></li>
              <li><a href="#" className="text-black  no-underline">Lejhro Recruiter</a></li>
              <li><a href="#" className="text-black  no-underline">About</a></li>
              <li><a href="#" className="text-black  no-underline">Blogs</a></li>
            
            </ul>
          </div>

          
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black  no-underline">Lejhro Bootcamp</a></li>

            </ul>
          </div>
          
    <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black  no-underline">Contact</a></li>
              <li><a href="#" className="text-black  no-underline">Terms of Use</a></li>
              <li><a href="#" className="text-black  no-underline">Privacy Statement </a></li>

            
            </ul>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-black  no-underline"><FaInstagram/></a></li>
              <li><a href="#" className="text-black  no-underline"><FaSquareXTwitter /></a></li>
              <li><a href="#" className="text-black no-underline"><FaYoutube /></a></li>
              <li><a href="#" className="text-black  no-underline"><FaLinkedin/></a></li>
            </ul>
          </div>
      
        </div>
        
       
        <div className="border-t border-gray-400 mt-8 pt-4">
          <p className="text-center text-sm">&copy; 2024 Lejhro | All Rights Reserved</p>
        </div>
      </footer>
      
)
 

    }

export default Footer
