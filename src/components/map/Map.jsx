import React, { Component } from "react";
import "./map.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const Links = () => (
  <div className="reli__footer-links">
    <div className="face"></div>
    <div className="linked"></div>
    <div className="twitter"></div>
    <div className="pint"></div>
  </div>
);

class Mapped extends Component {
  render() {
    return (
      <div className="reli__map-container">
        <div className="reli__map-info">
          <h2 className="reli__map-title1">agence</h2>
          <h1 className="reli__map-title2">RELIEFDESIGN</h1>
          <br></br>
          <h4>5795, avenue De Gaspé, Suite 207</h4>
          <h4>Montréal, QC, H2S 2X3</h4>
          <br></br>
          <h4>T 514 500.3605</h4>
          <h4>F 514 317.9320</h4>
          <br></br>
          <h4>info@reliefdesign.ca</h4>
          <Links />
        </div>
        <div className="reli__map-map">
          <Map
            google={this.props.google}
            style={{
            }}
            zoom={14}
            initialCenter={{
              lat: 45.529011,
              lng: -73.600345,
            }}>
            <Marker />
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB-h2ms7wW4a9863eGpGv2Ony6fC-e24IU",
})(Mapped);
