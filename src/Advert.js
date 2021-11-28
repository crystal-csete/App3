/** @format */

import React from "react";
import advert from "./images/advert.jpg";

const Advert = () => {
  return (
    <div className='AdvertDiv'>
      <img src={advert} className='AdvertImg' alt='green tea mix in cup' />
      <figcaption>This is the ad!</figcaption>
    </div>
  );
};

export default Advert;
