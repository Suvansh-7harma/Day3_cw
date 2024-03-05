import React from 'react'
import "../styles/card.css"
import photo from "../Assets/card.avif";

const Card = () => {
  return (
    <div className="cardSection">
      <div className="image">
        <img src={photo} alt="image"></img>
      </div>
      <div className="content-CS">
        <div className="heading-CS">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </div>
        <div className="para-CS">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </div>
        <div className="button-CS">
          <button className="Get-in-touch">Get in touch</button>
        </div>
      </div>
    </div>
  );
}

export default Card