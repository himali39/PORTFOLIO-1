import React from "react";
import Header from "../pages/header/Header";
import Banner from "../pages/banner/Banner";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Testimonial from "../pages/testimonials/Testimonial";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";


const MainComponent = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Service />
      <Testimonial/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default MainComponent;
