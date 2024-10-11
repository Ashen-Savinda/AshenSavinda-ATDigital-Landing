import React from "react";
import Button from "./Button";

const Content = ({ reverse = false, imageSrc, title, desciption }) => {
    return (
        //div with conditional layout based on the 'reverse' prop
        <div
            className={
                "flex items-center flex-col lg:mx-0 md:mx-10 sm:mx-8 mx-5 mt-14 " +
                (reverse ? "md:flex-row-reverse" : "md:flex-row items-center")
            }
        >
            {/* image section */}
            <img
                src={imageSrc}
                className="xl:w-[414px] xl:h-[414px] lg:w-[346px] lg:h-[346px] w-[275px] h-[275px]"
            />

            {/* text content section */}
            <div className="md:w-[542px]">
                <p className="text-bluish-purple text-[27px] font-semibold text md:text-left text-center">
                    {title}
                </p>
                <p className="py-2 text-center md:text-left leading-tight">
                    {desciption}
                </p>
                {/* Button section */}
                <div className="flex justify-center md:justify-start">
                    <Button text="Learn More" />
                </div>
            </div>
        </div>
    );
};

export default Content;
