import React from "react";
import youtubeImg from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import ScrollReveal from "scrollreveal";
const Footer = () => {
  // const scrollRevealOption = {
  //     distance: "50px",
  //     origin: "bottom",
  //     duration: 1000,
  //   };

  //   ScrollReveal().reveal("p", {
  //     ...scrollRevealOption,
  //     delay: 500,
  //   });
  
  return (
    <div className="bg-black text-white w-full flex flex-col justify-center items-center lg:px-28 px-10 pt-10 pb-4 gap-8" id="footer">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 md:gap-4">
        <div className="mb-8 md:mb-4 font-medium text-xl text-white flex flex-col gap-10 justify-start items-start">
          <div className="max-w-[120px] font-normal text-md text-white text-left">
            <a href="#home">
              <h4 className="text-white">Kingsukh Guest House</h4>
            </a>
          </div>
          <p className="text-[#78716c] text-[1rem] text-left font-normal">
            Discover a world of comfort, luxury, and adventure as you explore
            our curated selection of hotels, making every moment of your getaway
            truly extraordinary.
          </p>
          <a href="https://wa.link/at5ion">
            <button className="btn">BOOK NOW</button>
          </a>
        </div>

        <div className="mb-8 md:mb-4 font-medium text-xl text-white flex flex-col gap-10 justify-start items-start">
          <div className="max-w-[120px] font-normal text-md text-white text-left">
            <h4 className="text-white">QUICK LINKS</h4>
          </div>
          <ul className="list-none flex flex-col gap-6 justify-start items-start  ">
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Browse Destinations</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Special Offers & Packages</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Room Types & Amenities</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Customer Reviews & Ratings</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Travel Tips & Guides</a>
            </li>
          </ul>
        </div>

        <div className="mb-8 md:mb-4 font-medium text-xl text-white flex flex-col gap-10 justify-start items-start">
          <div className="max-w-[120px] font-normal text-md text-white text-left">
            <h4 className="text-white text-nowrap">OUR SERVICES</h4>
          </div>
          <ul className="list-none flex flex-col gap-6 justify-start items-start  ">
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Concierge Assistance</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Flexible Booking Options</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Airport Transfers</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="#">Wellness & Recreation</a>
            </li>
          </ul>
        </div>

        <div className="mb-8 md:mb-4 font-medium text-xl text-white flex flex-col gap-10 justify-start items-start">
          <div className="max-w-[120px] font-normal text-md text-white text-left">
            <h4 className="text-white text-nowrap">CONTACT US</h4>
          </div>
          <ul className="list-none flex flex-col gap-6 justify-start items-start  ">
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white text-left">
              <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">
                Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                Bengal 723156
              </a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="%20kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
            </li>
            <li className="text-[#78716c] text-[1rem] font-normal hover:text-white">
              <a href="tel:+919007062180">+91 9007062180 </a>
            </li>
          </ul>
          <div className="flex flex-nowrap gap-4 items-center">
            <a href="#">
              <img
                src={facebook}
                alt="facebook"
                width={"25px"}
                height={"25px"}
                className="w-max-[20px] opacity-80 transition-[0.3s] hover:opacity-100"
              />
            </a>
            <a
              href="https://www.instagram.com/kingsukhguesthouse/"
              target="_blank"
            >
              <img
                src={instagram}
                width={"25px"}
                height={"25px"}
                alt="instagram"
                className="w-max-[20px] opacity-80 transition-[0.3s] hover:opacity-100"
              />
            </a>
            <a href="#">
              <img
                src={youtubeImg}
                alt="youtube"
                width={"25px"}
                height={"25px"}
                className="w-max-[20px] opacity-80 transition-[0.3s] hover:opacity-100"
              />
            </a>
            <a href="#">
              <img
                src={twitter}
                alt="twitter"
                width={"25px"}
                height={"25px"}
                className="w-max-[20px] opacity-80 transition-[0.3s] hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="text-[#78716c] text-sm text-center">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
