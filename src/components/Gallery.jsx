import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import outImg from "../assets/out.jpg";
import ayodhya from "../assets/ayodhya.webp";
import large from "../assets/large.jpg";
import palash from "../assets/palash.webp";
import small from "../assets/small.jpg";
import baranti from "../assets/baranti.webp";
import recep from "../assets/recep.jpg";
import flower from "../assets/flower.jpg";
import room1 from "../assets/room1.jpg";
import mithonDam from "../assets/mithonDam.webp";

const Gallery = () => {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };
    ScrollReveal().reveal(".scrollBehaviour", {
      ...scrollRevealOption,
      delay: 500,
    });
  }, []);
  return (
    <div>
      <div className="w-full scrollBehaviour mx-auto flex gap-3 justify-center items-center">
        <p className="font-medium text-[#0c0a09]">GALLERY</p>
        <div className="border border-[#e82574] w-[60px] h-[1px]"></div>
      </div>
      <br />

      <div className="container11">
        <div className="box11 a">
          <img src={outImg} alt="" />
        </div>
        <div className="box11 b">
          <img src={ayodhya} alt="" />
        </div>
        <div className="box11 c">
          <img src={large} alt="" />
        </div>
        <div className="box11 d">
          <img src={palash} alt="" />
        </div>
        <div className="box11 e">
          <img src={small} alt="" />
        </div>
        <div className="box11 f">
          <img src={baranti} alt="" />
        </div>
        <div className="box11 g">
          <img src={recep} alt="" />
        </div>
        <div className="box11 h">
          <img src={flower} alt="" />
        </div>
        <div className="box11 i">
          <img src={room1} alt="" />
        </div>
        <div className="box11 j">
          <img src={mithonDam} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
