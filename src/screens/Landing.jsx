import React from 'react';
import Content from '../components/Content';
import Button from '../components/Button';
import FAQS from '../components/FAQS';
import HeroImage from '../assets/HeroImage.png';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';

const Landing = () => {
  return (
    <div>
      {/* hero section */}
      <div className="flex flex-col items-center mb-[80px]">
        {/* hero image */}
        <div className="relative w-full">
          <img src={HeroImage} className="w-full" />
        </div>

        {/* hero text with button */}
        <div className="xl:w-[630px] lg:w-[622px] bg-gradient-to-r from-interstellar-blue-dark to-rich-blue lg:absolute lg:bottom-10 lg:left-20 p-8">
          <p className="mb-5 text-4xl font-bold text-white capitalize md:text-5xl">
            We crush your competitors, goals, and sales records - without the B.S.
          </p>
          <Button text={"Get free consultation"} />
        </div>

        {/* content section */}
        <Content
          imageSrc={Image2}
          title="Web & Mobile App Development"
          desciption="Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online."
        />
        <Content
          imageSrc={Image1}
          reverse={true}
          title="Digital Strategy Consulting"
          desciption="Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in isolation
          and every business needs a different mix. We provide a clear concept and strategic
          overview to find the most efficient model for your business."
        />
      </div>

      {/* FAQS section */}
      <div className='flex items-center flex-col xl:mx-[297px] lg:mx-[152px] md:mx-[40px] sm:mx-[20px] mx-5 mt-14 mb-[80px] '>
        <p className="mb-5 text-4xl font-bold flex justify-center text-bluish-purple capitalize md:text-5xl">
          Frequently asked questions
        </p>

        {/* FAQS */}
        <FAQS
          title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
          description="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
        />
        <FAQS
          title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
          description="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
        />
        <FAQS
          title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
          description="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
        />
      </div>
    </div>
  );
};

export default Landing;
