import React from 'react'
import { MenuItem, SubHeading } from '../../components'
import { data, images } from '../../constants'
import './MainDish.css'

const MainDish = () => {
    return (
        <div className="app__mainMenu app__bg flex__center section__padding">

            <div className="app__mainMenu-title" >
                <h1 className="headtext__cormorant">Main Course</h1>
                <SubHeading />
            </div>

           


            <div className="app__mainMenu-menu">
                <div className='app__mainMenu-menu_first flex__center'>
                    <p className='app__mainMenu-menu_heading'>First Course</p>
                    <div className="app__mainMenu_menu_items">
                        {data.firstCourse.map((firstCourse, index) => (
                            <MenuItem key={firstCourse.title + index} title={firstCourse.title} price={firstCourse.price} tags={firstCourse.tags} />
                        ))}
                    </div>
                </div>
                <div className='app__mainMenu-menu_second flex__center'>
                    <p className='app__mainMenu-menu_heading'>Second Course</p>
                    <div className="app__mainMenu_menu_items">
                        {data.firstCourse.map((firstCourse, index) => (
                            <MenuItem key={firstCourse.title + index} title={firstCourse.title} price={firstCourse.price} tags={firstCourse.tags} />
                        ))}
                    </div>
                </div>



            </div>



        </div>
    )
}

export default MainDish