import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const TopNavigation = () => {
    //state to track whether the mobile menu is open
    const [isSelected, setIsSelected] = useState(false);

    const handleSelection = () => {
        //toggle the menu open/close on button click
        setIsSelected(!isSelected);
    };

    return (
        <header>
            <nav className="bg-bluish-purple h-[77px] font-inter px-4 lg:px-6 py-2.5 flex flex-col justify-center relative">
                <div className="flex items-center justify-between lg:mx-14 md:mx-9 sm:mx-4">

                    <a className="flex items-center">
                        <img src={Logo} className="w-[238.89px] mx-4" alt="AT Digital Logo" />
                    </a>

                    {/* hamburger menu button for mobile view */}
                    <div className="flex items-center justify-end w-full md:w-0">
                        <button
                            type="button"
                            className="inline-flex md:hidden items-center p-2 text-sm rounded-lg"
                            aria-expanded="false"
                            //trigger menu toggle on click
                            onClick={handleSelection}
                        >
                            {isSelected ? (
                                //cross icon when the menu is open
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="2" y1="2" x2="29" y2="29" stroke="white" strokeWidth="4" />
                                    <line x1="2" y1="29" x2="29" y2="2" stroke="white" strokeWidth="4" />
                                </svg>
                            ) : (
                                //hamburger icon when the menu is closed
                                <svg width="31" height="25" viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="31" height="4" rx="2" fill="white" />
                                    <rect y="10.5" width="31" height="4" rx="2" fill="white" />
                                    <rect y="20.5" width="31" height="4" rx="2" fill="white" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* navigation links */}
                    <div className="md:w-full md:flex md:justify-end">
                        <div
                            className={
                                "bg-bluish-purple items-center justify-between w-full md:flex md:w-auto z-50 absolute md:static top-full right-0 " +
                                //show or hide the menu based on 'isSelected' state
                                (isSelected ? "block" : "hidden")
                            }
                        >
                            <ul className="flex flex-col mt-4 text-sm md:flex-row md:space-x-8 md:mt-0">
                                
                                {/* conditionally render "Home" link in mobile menu only */}
                                {isSelected && (
                                    <li>
                                        <a
                                            href="#"
                                            className="block py-2 pl-3 border-y pr-4 text-white md:border-0 md:p-0"
                                        >
                                            HOME
                                        </a>
                                    </li>
                                )}

                                {/* navigation list */}
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 border-b pr-4 text-white md:border-0 md:p-0"
                                        aria-current="page"
                                    >
                                        SERVICES
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white border-b md:border-0 md:p-0"
                                    >
                                        ABOUT US
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white border-b md:border-0 md:p-0"
                                    >
                                        CONTACT US
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block py-2 pl-3 pr-4 text-white border-b md:border-0 md:p-0"
                                    >
                                        CAREERS
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default TopNavigation;
