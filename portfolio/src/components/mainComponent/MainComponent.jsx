import React from "react";
import Header from "../pages/header/Header";
import Banner from "../pages/banner/Banner";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import Footer from "../pages/footer/Footer";
import { Button } from "react-bootstrap";

const MainComponent = () => {
  
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Blog />
      <Contact />
      
      <Footer />
    </div>
  );
};

export default MainComponent;
