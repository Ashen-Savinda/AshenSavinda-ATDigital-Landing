import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="mt-5 bg-bluish-purple">
      <div className="p-4 py-6 lg:py-8 lg:mx-14 md:mx-9 sm:mx-4">
        <div className="lg:flex lg:justify-between">

          {/* logo and description */}
          <div className="mb-6 md:mb-0">
            <div>
              <img src={Logo} className="w-[238.89px] me-3" alt="AT Digital Logo" />
              <p className="mt-5 lg:w-[413px] md:w-[438px] sm:max-w-[413px] text-white text-sm">
                Your goal is our target. Not anything in between. We use online marketing
                platforms and tools to achieve single objective - your business results.
              </p>
            </div>
          </div>

          {/* technologies and services */}
          <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-2 mt-9 lg:mt-0">
            {/* Technologies List */}
            <div>
              <h2 className="mb-6 text-[21px] text-white normal-case">
                Our Technologies
              </h2>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#">ReactJS</a>
                </li>
                <li>
                  <a href="#">Gatsby</a>
                </li>
                <li>
                  <a href="#">NextJS</a>
                </li>
                <li>
                  <a href="#">NodeJS</a>
                </li>
              </ul>
            </div>

            {/* Services List */}
            <div>
              <h2 className="mb-6 text-[21px] text-white normal-case">
                Our Services
              </h2>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <a href="#">Social Media Marketing</a>
                </li>
                <li>
                  <a href="#">Web & Mobile App Development</a>
                </li>
                <li>
                  <a href="#">Data & Analytics</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* privacy policy and terms */}
        <div className="flex justify-center w-full">
          <div className="sm:w-[630px]">
            <hr className="my-6 border-white sm:mx-auto lg:my-8" />
            <div className="flex mt-4 text-sm sm:justify-center sm:mt-0">
              <div className="text-center text-white">
                <a href="#">Privacy Policy</a>
              </div>

              <div className="mx-4 text-white">|</div>

              <div className="text-center text-white">
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
