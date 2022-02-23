import React from "react";
import { Footer, Map, Navbar } from "../components/";
import "./agence.css";

function Agence() {
  return (
    <div className="App">
      <Navbar />
        <div className="reli__agence-photo">
        <h1 className="reli__agence-titre">Agence</h1>
        </div>
      <div className="reli__agence-expertise">
        <h2 className="reli__agence-expertise-title">Notre expertise</h2>
        <div className="reli__agence-expertise-services">
      <p className="reli__agence-para1">Professionnelle, jeune et dynamique, aRD possède une grande capacité de design ainsi qu’une bonne connaissance des méthodes de construction. La recherche de distinction et de caractère est au cœur de nos préoccupations. Hautement créative, aRD procure à ses clients autant de moyens de se démarquer, de se différencier ou de se positionner avantageusement par rapport à la concurrence.
      </p><br></br><br></br><br></br><p className="reli__agence-para15">aRD offre à ses nombreux clients, une multitude de services professionnels variés, dont:</p>
            <div>Analyse de site et études paysagères</div>
            <div>Plans directeurs (Master Planning)</div>
            <div>Esquisses préliminaires</div>
            <div>Modélisation 3D (SketchUp)</div>
            <div>Documents de présentation</div>
            <div>Plans et devis d’exécution </div>
            <div>Surveillance de chantier (en résidence ou ponctuelle)</div>
            <div>Gestion de projet</div>
        </div>
        <p className="reli__agence-para2">Soucieuse de la qualité de l’environnement, aRD adhère aux principes du développement durable. Nos solutions sont pratiques et durables, réfléchies et esthétiques. Elles intègrent une fine analyse du milieu d’intervention, des notions d’écologie et une approche multidisciplinaire afin d’assurer l’unicité de nos projets.</p>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="reli__agence-equipe">
        <h2 className="reli__agence-equipe-titre">Notre équipe</h2>
        <div className="reli__agence-equipe-pics">
          <div><div className="reli__agence-equipe-jf"></div><h3>Jean-Francois Veilleux</h3></div>
          <div><div className="reli__agence-equipe-es"></div><h3>Éric St-Pierre</h3></div>
          <div><div className="reli__agence-equipe-jj"></div><h3>Julie Jarry</h3></div>
          <div><div className="reli__agence-equipe-yp"></div><h3>Yannik Pilon</h3></div>
          <div><div className="reli__agence-equipe-pm"></div><h3>Pascal Milette</h3></div>
          <div><div className="reli__agence-equipe-cn"></div><h3>Clémence Nicolas</h3></div>
          <div><div className="reli__agence-equipe-km"></div><h3>Kahina Mezouane</h3></div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Agence;
