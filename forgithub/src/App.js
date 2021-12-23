import React from 'react';
import Navbar from './component/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <div>
        <div className="fpic">
          <div className='pictext'>Architecture de paysage</div>
        </div>
       <div className="fpara"><span>Agence RELIEFDESIGN (aRD)</span><br></br><br></br>est une entreprise qui offre des services spécialisés de consultations, de design, de planification et de suivi de réalisation, appliqués principalement aux domaines de l’architecture de paysage, du développement immobilier, du développement hôtelier, de même que de l’aménagement urbain et la conception de parc.</div>
      </div>
    </div>
  );
}

export default App;
