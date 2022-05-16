import React from 'react';
import PropTypes from 'prop-types';


const Slider = () => (
 <div className="slider">
    <div>
    <img src="logo192.png" alt="placeholder"/>
    <img src="logo192.png" alt="placeholder"/>
    <img src="logo192.png" alt="placeholder"/>
  </div>
  
  <div>
  <button className="btn btn-primary" > left</button>
  <span> </span>
  <button className="btn btn-primary"> right</button>
  </div>
 </div>
);

Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
