import React from "react";
import Header from "../pages/header/Header";
import Banner from "../pages/banner/Banner";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Testimonial from "../pages/testimonials/Testimonial";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Counter from "../pages/service/Counter";
import Blog from "../pages/blog/Blog";


const MainComponent = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Service />
   
      <Portfolio/>
      
      <Blog/>
      <Contact/>
    </div>
  );
};

export default MainComponent;
