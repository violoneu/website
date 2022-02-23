import React, { useState } from "react";
import { Footer, Navbar } from "../components/";
import items from ".././allData";
import Menu from "../components/menuprojets/Menu";
import Button from "../components/menuprojets/Button";
import "./projets.css";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

console.log(allCategories);

function Projets() {
  const [menuItem, setMenuitem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuitem(items);
      return;
    }
    const filteredData = items.filter((item) => item.category === button);
    setMenuitem(filteredData);
  };

  return (
    <div className="reli__projets">
      <Navbar />
      <div className="reli__projets-title">
        <h1>Projets</h1>
      </div>
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} />
      <Footer />
    </div>
  );
}

export default Projets;
