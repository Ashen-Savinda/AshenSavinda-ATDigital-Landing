import React, { useState } from 'react';

const FAQS = ({ title, description }) => {
  //state to manage whether the FAQ is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    //toggle the open/closed state
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full p-4 bg-faqbg rounded-lg my-2">
      {/* FAQ title section */}
      <div
        //toggle the FAQ when clicked
        className={`flex justify-between items-center cursor-pointer ${isOpen ? 'text-bluish-purple' : 'text-black'}`}
        onClick={toggleFAQ}
      >
        {/* render title passed from props */}
        <h3 className="font-medium text-2xl xs:text-xl mb-2">
          {title}
        </h3>

        {/* Show "+" when closed, "-" when open */}
        <span className="text-2xl xs:text-xl">{isOpen ? '-' : '+'}</span>
      </div>

      {/* FAQ description section */}
      {/* render description only when isOpen is true */}
      {isOpen && (
        <div className="mt-2 text-xl xs:text-lg text-faqcolor">
          <p>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQS;
