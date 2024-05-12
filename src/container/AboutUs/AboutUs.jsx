import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt='' />
    </div>


    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="" className="spoon" />
        <p className="p__opensans">Welcome to our restaurant! We are dedicated to providing our customers with a memorable dining experience through exceptional service and delicious food.
          Our menu features a diverse selection of dishes that are carefully crafted using only the freshest and highest quality ingredients. From classic favorites to innovative new creations, there is something for everyone to enjoy.
          In addition to our regular menu, we offer daily specials that showcase seasonal ingredients and unique flavor combinations. Our expertly trained chefs take pride in creating dishes that are both visually stunning and delicious.
          Whether you are joining us for a romantic dinner for two, a family celebration, or a business lunch, we strive to make your visit as comfortable and enjoyable as possible. Our knowledgeable and friendly staff are always on hand to answer any questions you may have and to ensure that your experience with us is nothing short of exceptional.
          Thank you for choosing our restaurant, and we look forward to serving you soon!
        </p>
        <button type='button' className="custom__button">Know More</button>
      </div>

        <div className = "app__aboutus-content_watch flex__center">
          <img src={images.divider} alt="" className="stopwatch" />
        </div>
     

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our history</h1>
        <img src={images.spoon} alt="" className="spoon" />
        <p className="p__opensans">Welcome to our restaurant! We are dedicated to providing our customers with a memorable dining experience through exceptional service and delicious food.
          Our menu features a diverse selection of dishes that are carefully crafted using only the freshest and highest quality ingredients. From classic favorites to innovative new creations, there is something for everyone to enjoy.
          In addition to our regular menu, we offer daily specials that showcase seasonal ingredients and unique flavor combinations. Our expertly trained chefs take pride in creating dishes that are both visually stunning and delicious.
          Whether you are joining us for a romantic dinner for two, a family celebration, or a business lunch, we strive to make your visit as comfortable and enjoyable as possible. Our knowledgeable and friendly staff are always on hand to answer any questions you may have and to ensure that your experience with us is nothing short of exceptional.
          Thank you for choosing our restaurant, and we look forward to serving you soon!
        </p>
        <button type='button' className="custom__button">Know More</button>
      </div>


    </div>
  </div>
);

export default AboutUs;
