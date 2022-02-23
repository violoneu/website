import React from "react";
import "./menu.css";

function Menu({ menuItem }) {
  return (
    <div className="item">
      {menuItem.map((item) => {
        return (
          <div className="item-con" key={item.id}>
            <div className="item-container">
              <img src={item.image} alt="" className="reli__menu-image" />
              <h2 className="item-title">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
