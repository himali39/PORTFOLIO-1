import { Container } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import bannerImage from "../../img/Frame-2.png";
import "./banner.css";

const Banner = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Designer", "Developer", "Freelancer"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedElement.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    // <div
    //   id="hero"
    //   className="hero route bg-image"
    //   style={{ backgroundImage: `url(${bannerImage})`, position: "relative" }}
    // >
    //   <div className="overlay-itro"></div>
    //   <div className="hero-content display-table">
    //     <div class="table-cell">
    //       <Container>
    //         <p className="display-6 color-d">Hello, world!</p>
    //         <h1 className="hero-title mb-4">I am Himali Patel</h1>
    //         <p className="hero-subtitle">
    //           <span className="hero-subtitle" ref={typedElement}></span>
    //         </p>
    //         <p className="pt-3">
    //           <a
    //             className="btn btn-primary btn js-scroll px-4"
    //             href="#about"
    //             role="button"
    //           >
    //             Learn More
    //           </a>
    //         </p>
    //       </Container>
    //     </div>
    //   </div>
    // </div>
    // Assuming you're using react-bootstrap

    <div
      id="hero"
      className="hero route bg-image relative h-screen"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="overlay-itro bg-black absolute top-0 left-0 w-full h-full opacity-90"></div>
      <div className="hero-content text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Container>
          <p className="display-6 color-d text-white">Hello, world!</p>
          <h1 className="hero-title mb-4 text-3xl md:text-4.5xl font-semibold text-white">
            I am Himali Patel
          </h1>
          <p className="hero-subtitle text-xl md:text-2.5xl font-semibold">
            <span className="hero-subtitle" ref={typedElement}></span>
          </p>
          <p className="pt-3">
            <a
              className="btn btn-primary btn js-scroll px-4"
              href="#about"
              role="button"
            >
              Learn More
            </a>
          </p>
        </Container>
      </div>
    </div>
  );
};


export default Banner;
