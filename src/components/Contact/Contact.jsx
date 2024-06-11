import React from 'react';
import "./Contact.css";
import LocationImg from "../../assets/location.png"
import MailImg from "../../assets/mail.png"
import CallImg from "../../assets/call.png"
import OneImg from "../../assets/1.png"
import threeImg from "../../assets/3.png"
import SecondImg from "../../assets/2.png"
import FifthImg from "../../assets/5.png"
const ContactForm = () => {
  return (
    <section id="contact" className="section1 flex justify-center items-center min-h-screen bg-white">
      <div className="container1 relative min-w-1100px min-h-550px flex z-10">
        <div className="contactInfo1 absolute top-40px w-350px bg-primary-color z-10 p-40 flex flex-col justify-between rounded-lg">
          <h2 className="text-white text-24px font-semibold">Contact Info</h2>
          <ul className="info relative my-20">
            <li className="flex items-start mb-20 cursor-pointer">
              <span className="w-30px min-w-30px">
                <img src={LocationImg} alt="Location" />
              </span>
              <span className="text-white ml-10px font-light">
                Beside Barshal Water Tank, <br />
                Manpur, Barhanti, <br />
                West Bengal 723156
              </span>
            </li>
            <li className="flex items-start mb-20 cursor-pointer">
              <span className="w-30px min-w-30px">
                <img src={MailImg} alt="Mail" />
              </span>
              <span className="text-white ml-10px font-light">
                <a href="mailto:kkghosh0099@gmail.com" className="text-white">
                  kkghosh0099@gmail.com
                </a>
              </span>
            </li>
            <li className="flex items-start mb-20 cursor-pointer">
              <span className="w-30px min-w-30px">
                <img src={CallImg} alt="Call" />
              </span>
              <span className="text-white ml-10px font-light">
                <a href="tel:+919007062180" className="text-white">
                  +91 9007062180
                </a>
              </span>
            </li>
          </ul>
          <ul className="sci relative flex">
            <li className="mr-15">
              <a href="#">
                <img src={OneImg} alt="Social Media" />
              </a>
            </li>
            <li className="mr-15">
              <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank">
                <img src={threeImg} alt="Instagram" />
              </a>
            </li>
            <li className="mr-15">
              <a href="#">
                <img src={SecondImg} alt="Social Media" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={FifthImg} alt="Social Media" />
              </a>
            </li>
          </ul>
        </div>
        <div className="contactForm1 absolute p-70px pl-250px ml-150px w-calc(100% - 150px) h-full bg-white shadow-2xl rounded-lg">
          <h2 className="text-primary-color text-24px font-semibold">Send a Message</h2>
          <div className="formBox1 relative flex justify-between flex-wrap pt-30px">
            <div className="inputBox1 relative mb-35px w-47%">
              <input type="text" required className="w-full resize-none py-5px font-light text-18px text-dark border-none outline-none border-b-1 border-gray-500" />
              <span className="absolute left-0 py-5px font-light transition-all duration-300 ease-in-out">First Name</span>
            </div>
            <div className="inputBox1 relative mb-35px w-47%">
              <input type="text" required className="w-full resize-none py-5px font-light text-18px text-dark border-none outline-none border-b-1 border-gray-500" />
              <span className="absolute left-0 py-5px font-light transition-all duration-300 ease-in-out">Last Name</span>
            </div>
            <div className="inputBox1 relative mb-35px w-47%">
              <input type="email" required className="w-full resize-none py-5px font-light text-18px text-dark border-none outline-none border-b-1 border-gray-500" />
              <span className="absolute left-0 py-5px font-light transition-all duration-300 ease-in-out">Email Address</span>
            </div>
            <div className="inputBox1 relative mb-35px w-47%">
              <input type="text" required className="w-full resize-none py-5px font-light text-18px text-dark border-none outline-none border-b-1 border-gray-500" />
              <span className="absolute left-0 py-5px font-light transition-all duration-300 ease-in-out">Mobile Number</span>
            </div>
            <div className="inputBox1 relative mb-35px w-full">
              <textarea required className="w-full resize-none py-5px font-light text-18px text-dark border-none outline-none border-b-1 border-gray-500"></textarea>
              <span className="absolute left-0 py-5px font-light transition-all duration-300 ease-in-out">Write your message here...</span>
            </div>
            <div className="inputBox1 relative w-full">
              <input type="submit" value="Send" className="cursor-pointer bg-primary-color rounded-lg text-white border-none max-w-150px py-12px px-4 hover:bg-primary-color" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
