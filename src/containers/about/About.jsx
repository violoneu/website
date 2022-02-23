import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="reli__about">
      <div className="reli__about-text">
        <span className="reli__about-text-span">Agence RELIEFDESIGN</span>
        <br></br>
        <br></br>
        <p>
          est une entreprise qui offre des services spécialisés de
          consultations, de design, de planification et de suivi de réalisation,
          appliqués principalement aux domaines de l’architecture de paysage, du
          développement immobilier, du développement hôtelier, de même que de
          l’aménagement urbain et la conception de parc.
        </p>
      </div>
      <div className="reli__about-slideshow">
        <h1 className="reli__about-slideshow-text">Derniers projets</h1>
        <div className="reli__about-show">
          <h3 className="reli__about-show-h3">mont-orford fraser</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
