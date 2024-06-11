import React, { useEffect } from 'react';
import "./Header.css";
import OutImg from "../../assets/out.jpg"
import Small from "../../assets/small.jpg"
import Large from "../../assets/large.jpg"
import seven from "../../assets/7.png"
import ScrollReveal from "scrollreveal";
const Header = () => {
    useEffect(() => {
        const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
        };
        ScrollReveal().reveal(".header__container h1", {
          ...scrollRevealOption,
          delay: 500,
        });
        ScrollReveal().reveal(".header__container p", {
            ...scrollRevealOption,
            
          });
          ScrollReveal().reveal(".about__image img", {
            ...scrollRevealOption,
           origin: "left",
            
          });
          ScrollReveal().reveal(".about__content .section__subheader", {
            ...scrollRevealOption,
            delay: 500,
          });
          ScrollReveal().reveal(".about__content .section__header", {
            ...scrollRevealOption,
            delay: 1000,
          });
          ScrollReveal().reveal(".about__content .section__description", {
            ...scrollRevealOption,
            delay: 1500,
          });
          
          ScrollReveal().reveal(".about__btn", {
            ...scrollRevealOption,
            delay: 2000,
          });
          ScrollReveal().reveal(".room__card", {
            ...scrollRevealOption,
            interval: 500,
          });
          
          // service container
          ScrollReveal().reveal(".service__list li", {
            ...scrollRevealOption,
            interval: 500,
            origin: "right",
          });
      }, []);
  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__bar">
            <div className="logo">
              <a href="https://wa.link/at5ion"><span style={{color: "aliceblue"}}>Kingsukh Guest House</span></a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#gallary">Gallary</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="https://wa.link/at5ion">
            <button className="btn nav__btn">BOOK NOW</button>
          </a>
        </nav>
        <div className="section__container header__container" id="home">
          <p>Simple - Unique - Friendly</p>
          <h1>Make Yourself At Home<br />In Our <span>Guest House</span>.</h1>
        </div>
      </header>
      <section className="section__container booking__container">
        <div className="booking__form">
          <div className="input__group input__btn">
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>
      <section className="section__container about__container" id="about">
        <div className="about__image">
          <img src={OutImg} alt="about" />
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">The Best Holidays Start Here!</h2>
          <p className="section__description">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay. <br />
            <h4><a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</a></h4>
            <h4><a href="tel:+919007062180"> Contact us: +91 9007062180 </a></h4>
            <br/>
          </p>
          <div className="about__btn">
            <a href="https://wa.link/at5ion">
              <button className="btn">BOOK NOW</button>
            </a>
          </div>
        </div>
      </section>
      
      <section className="section__container room__container" id="rooms">
  <p className="section__subheader">OUR LIVING ROOM</p>
  <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
  <div className="room__grid">
    <div className="room__card">
      <div className="room__card__image">
        <img src={Small} alt="room" />
        <div className="room__card__icons">
          <span><i className="ri-heart-fill"></i></span>
          <span><i className="ri-paint-fill"></i></span>
          <span><i className="ri-shield-star-line"></i></span>
        </div>
      </div>
      <div className="room__card__details">
        <h4>Cozy Haven Room</h4>
        <p>
          Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.
        </p>
        <h5>Starting from <span>Rs. 1000/night</span></h5>
        <a href="https://wa.link/at5ion">
          <button className="btn">BOOK NOW</button>
        </a>
      </div>
    </div>
    <div className="room__card">
      <div className="room__card__image">
        <img src={Large} alt="room" />
        <div className="room__card__icons">
          <span><i className="ri-heart-fill"></i></span>
          <span><i className="ri-paint-fill"></i></span>
          <span><i className="ri-shield-star-line"></i></span>
        </div>
      </div>
      <div className="room__card__details">
        <h4>Spacious Serenity Suite</h4>
        <p>
          Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.
        </p>
        <h5>Starting from <span>Rs. 1500/night</span></h5>
        <a href="https://wa.link/at5ion">
          <button className="btn">BOOK NOW</button>
        </a>
      </div>
    </div>
  </div>
</section>

<section className="service" id="service">
      <div className="section__container service__container">
        <div className="service__content">
          <p className="section__subheader">SERVICES</p>
          <h2 className="section__header">Strive Only For The Best.</h2>
          <ul className="service__list">
            <li>
              <span></span>
              High Class Security
            </li>
            <li>
              <span></span>
              24 Hours Room Service
            </li>
            <li>
              <span></span>
              Restaurant
            </li>
            <li>
              <span></span>
              Tourist Guide Support
            </li>
          </ul>
        </div>
      </div>
    </section>

      
    </>
  );
}

export default Header;
