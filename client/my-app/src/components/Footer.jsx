import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (<div className="w-full  pt-10 bg-gray-900 text-white py-12">
  <div className=" mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h4 className="text-xl font-bold mb-4">Links</h4>
        <ul>
          <li><a href="home" className="text-gray-300 hover:text-gray-100">Home</a></li>
          <li><a href="contact-us" className="text-gray-300 hover:text-gray-100">Our Mission</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">Create an account</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">About us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">Affiliate Program</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-4">Get Help</h4>
        <ul>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">FAQ</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">Contact Us</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">Terms & Conditions</a></li>
          <li><a href="#" className="text-gray-300 hover:text-gray-100">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
        <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="text-gray-300 hover:text-gray-100"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Footer;
