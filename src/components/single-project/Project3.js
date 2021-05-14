import React from 'react'
import Footer from '../Footer'
import SingleProject from './SingleProject'
import {Link} from 'react-router-dom'

import '../../style/SingleProject.scss'
import back from '../../assets/images/misc/back.svg'
import Logo from '../Logo'

import html from '../../assets/images/technologies/html.svg'
import css from '../../assets/images/technologies/css.svg'
import js from '../../assets/images/technologies/javascript.svg'
import chrome from '../../assets/images/technologies/chrome.svg'

import mainImage from '../../assets/images/projects/project3.png'

import imageMin1 from '../../assets/images/project_screen_shots/project3/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project3/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project3/min/project_image3.png'

import imageMax1 from '../../assets/images/project_screen_shots/project3/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project3/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project3/max/project_image3.png'


const Project3 = (props)=>{
/*
    heading
    subheading
    technologies -> needs to be jsx
    designed -> boolean
    linkTo
    linkName
    description
    mainImage
    images-> needs to be jsx
*/

    const goBack = ()=>{
        window.history.back()
    }

    return(
        
        <div className='single-project'>
            {/* <LargeImage/> */}
            <Link to='/'><Logo/></Link>            
            <div className="back" onClick={goBack}> 
                <img src={back} alt=""/>
            </div>
            <SingleProject
                heading = 'Google Meet AutoExit'
                subheading = 'A google chrome extension built be me'
                technologies ={
                    [chrome,html,css,js]
                }
                designed={true}
                linkTo='https://bit.ly/2Ry1wh9'
                linkName= 'VISIT : chrome.google.com/webstore'
                description={
                    <div className='description'>
                    This project is a google chrome extension, with more than 1.5k users, and a total rating of more than 4 stars.
                    <br/>The extension basically allows a person in a google meeting to leave the meeting automatically, as soon as number of participants fall below a specified number, or when the clock hits a specified time.                        
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>Chrome Extension API</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                        </ul>

                    </div>
                }
                mainImage={mainImage}
                images = {
                    {
                        min : [imageMin1,imageMin2,imageMin3],
                        max : [imageMax1,imageMax2,imageMax3]
                    }
                }
                animate = {true}
            />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Project3