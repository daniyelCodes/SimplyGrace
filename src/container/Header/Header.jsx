import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>Dining at its finest!!</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        Experience the Ultimate Culinary Adventure with Our Award-Winning Chefs, Exquisite Menu, and Impeccable Service - A Dining Experience Like No Other.
      </p>
      <button type='button' className='custom__button'>Explore Now</button>
    </div>

    <div className="app__wrapper_img">
        <img src= {images.headerImg} alt='' />
    </div>
  </div>
);

export default Header;
