import React from "react";
import { MenuPizza } from "../Menu.js";
import MenuCarditem from "../components/MenuCarditem.jsx";
import "../styles/Menu.css";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";



const Menu = () => {
  const scrollToSection = () => {
    const section = document.getElementById("menu");
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  return (
    <div>
       <video src="/video/videoBG.mp4"  autoPlay loop muted/>
       <button
          className="scroll-down-button "
          onClick={scrollToSection}
          scroll
          down>
          <ArrowCircleDownIcon />
        </button>
      <div className="container menu__">
        <h1 className="menu-title">Our Menu</h1>
       
        <div className="menuList"id="menu">
          {MenuPizza.map((item) => {
            return (
              <MenuCarditem
                key={item.id}
                name={item.name}
                url={item.url}
                description={item.description}
                price={item.price}
                text={'Order Pizza'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
