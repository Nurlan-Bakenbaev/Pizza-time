import React from "react";
import { Link } from "react-router-dom";


const MenuCarditem = ({ url, name, description, price, text }) => {
  return (
    <div className="menuItem">
      <h1>{name}</h1>
      <img src={url} alt="pizza" />
      <p>{description}</p>
      <p>$ {price}</p>
      <Link to={'/contact'}>
        <button className="btn-order">{text} </button>
      </Link>
    </div>
  );
};

export default MenuCarditem;
