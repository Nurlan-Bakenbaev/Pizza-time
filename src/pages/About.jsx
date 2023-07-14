import React from "react";
import ".././styles/About.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const About = () => {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div>
        <video
          className=".videoBG"
          autoPlay
          muted
          loop
          src="/video/videoBG-2.mp4"
        />
        <button
          className="scroll-down-button "
          onClick={scrollToSection}
          scroll
          down
        >
          <ArrowCircleDownIcon />
        </button>
      </div>
      <div id="about" className="about-page  ">
        <div>
      
          <h2>About Us</h2>
          <p>
            Welcome to our pizza restaurant! We are dedicated to serving
            delicious pizzas made with the finest ingredients.
          </p>
          <p>
            Our skilled chefs prepare each pizza with love and passion to ensure
            a memorable dining experience for our customers.
          </p>
          <p>
            Whether you prefer classic Margherita, flavorful Pepperoni, or
            unique gourmet toppings, we have a variety of options to satisfy
            your cravings.
          </p>
          <p>
            Come visit us today and indulge in the ultimate pizza experience!
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the ultimate pizza
            experience to our valued customers.
          </p>
          <p>We strive to:</p>
          <ul>
            <li>
              Create mouthwatering pizzas using the freshest and finest
              ingredients.
            </li>
            <li>
              Deliver exceptional customer service that exceeds expectations.
            </li>
            <li>
              Provide a warm and inviting atmosphere for an enjoyable dining
              experience.
            </li>
            <li>
              Offer a diverse menu that caters to all tastes, including a wide
              range of toppings, specialty pizzas, and vegetarian options.
            </li>
            <li>
              Support our local community by sourcing ingredients locally
              whenever possible.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
