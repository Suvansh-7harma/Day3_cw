import React from 'react'
import "../styles/heroSection.css"

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="section">
        <div className="content-HS">
          <h1 className="headingLine1-HS">Let us find your</h1>
          <h1 className="headingLine2-HS">Forever Food</h1>
        </div>
        <p className="para-HS">
          Lorem ipsum dolor sit amet consectetur, adipisiscing elit.<br></br>
          Hesciunt illo trejerf djfse ducimu numhwd ea!
        </p>
        <div className="buttons-HS">
          <button className="searchNow">Search Now</button>
          <button className="Know-more">Know more</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection