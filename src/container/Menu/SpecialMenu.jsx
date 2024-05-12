import React from 'react';

import './SpecialMenu.css';
import { images, data } from '../../constants';
import {SubHeading, MenuItem} from '../../components';

const SpecialMenu = () => (
  <div className= "app__specialMenu flex__center section__padding" id='menu'>
    <div className = "app__specialMenu-title" >
        <SubHeading title = 'The menu that fits your appetite' />
        <h1 className= "headtext__cormorant">Todays Specials</h1>
    </div>

    <div className = "app__specialMenu-menu">
        <div className = "app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & beer</p>
            <div className = "app__specialMenu_menu_items">
                { data.wines.map((wine, index) => (
                   <MenuItem key={wine.title + index} title = {wine.title} price= {wine.price} tags= {wine.tags} />
                )) }
            </div>
        </div>
                    {/* image */}
        <div className = "app__specialMenu-menu_img" >
            <img src= {images.menu} alt='wine img' />
        </div>
        
      <div className="app__specialMenu-menu_dishes flex__center">
        <p className='app__specialMenu-menu_heading'>Dishes</p>
        <div className="app__specialMenu_menu_items">
          {data.dishes.map((dish, index) => (
            <MenuItem key={dish.title + index} title={dish.title} price={dish.price} tags={dish.tags} />
          ))}
        </div>
      </div>
    </div>

            <div style={{marginTop: "15px"}}>
                <button  type='button' className="custom__button">View More</button>
            </div>

  </div>
);

export default SpecialMenu;
