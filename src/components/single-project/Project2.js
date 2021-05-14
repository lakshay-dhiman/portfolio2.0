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
import gsap from '../../assets/images/technologies/gsap.png'
import sass from '../../assets/images/technologies/sass.svg'

            
import mainImage from '../../assets/images/projects/project2.png'

import imageMin1Project1 from '../../assets/images/project_screen_shots/project2/min/project1/project_image1.png'
import imageMin2Project1 from '../../assets/images/project_screen_shots/project2/min/project1/project_image2.gif'

import imageMax1Project1 from '../../assets/images/project_screen_shots/project2/max/project1/project_image1.png'
import imageMax2Project1 from '../../assets/images/project_screen_shots/project2/max/project1/project_image2.gif'

import imageMin1Project2 from '../../assets/images/project_screen_shots/project2/min/project2/project_image1.png'
import imageMin2Project2 from '../../assets/images/project_screen_shots/project2/min/project2/project_image2.png'
import imageMin3Project2 from '../../assets/images/project_screen_shots/project2/min/project2/project_image3.png'
import imageMin4Project2 from '../../assets/images/project_screen_shots/project2/min/project2/project_image4.png'


import imageMax1Project2 from '../../assets/images/project_screen_shots/project2/max/project2/project_image1.png'
import imageMax2Project2 from '../../assets/images/project_screen_shots/project2/max/project2/project_image2.png'
import imageMax3Project2 from '../../assets/images/project_screen_shots/project2/max/project2/project_image3.png'
import imageMax4Project2 from '../../assets/images/project_screen_shots/project2/max/project2/project_image4.png'


const Project2 = (props)=>{
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
            <Link to='/'><Logo/></Link>
            <div className="back" onClick={goBack}> 
                <img src={back} alt=""/>
            </div>
            <SingleProject
                heading = '1.) Kissflow'
                subheading = 'Implemented the hero animation on scroll'
                technologies ={
                    [gsap,html,css,js]
                }
                designed={false}
                linkTo='https:kissflow.com'
                linkName= 'VISIT : kissflow.com'
                description={
                    <div className='description'>
                        I worked as a front end developer for an online startup called kissflow. My task was to implement an aniimation in the hero section of the landing page. I was given with a gif from which i extracted the frames for and created an animation depicting a story, on scroll.
                        <br/>I implemented the animation using GSAP animation platform
                        <br/>I insist you to visit the page to get an better idea of the work.
                        <br/><br/>* I only made the hero section to animate, and frame files were provided, rest of the page was prebuilt.
                        <br/><br/>Technologies Used:
                        <ul>
                            <li>GSAP</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                        </ul>

                    </div>
                }
                mainImage={mainImage}
                images = {
                    {
                        min : [imageMin1Project1,imageMin2Project1],
                        max : [imageMax1Project1,imageMax2Project1]
                    }
                }
                animate={true}
            />
            <SingleProject
                heading = '2.) Kissflow'
                subheading = 'Created the pricing page from scrach'
                technologies ={
                    [html,sass,css,js,gsap]
                }
                designed={false}
                linkTo='https://kissflow.com/workflow/pricing/'
                linkName= 'VISIT : kissflow.com'
                description={
                    <div className='description'>
                        I worked as a front end developer for the company to develop the pricing page of some of the services. Completely responsive webpages were to be created and I was given the design which I developed using html, css, and Javascript
                        <br/><br/>Technologies Used:
                        <ul>
                            <li>sass</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                        </ul>

                    </div>
                }
                mainImage={mainImage}
                images = {
                    {
                        min : [imageMin1Project2,imageMin2Project2,imageMin3Project2,imageMin4Project2],
                        max : [imageMax1Project2,imageMax2Project2,imageMax3Project2,imageMax4Project2]
                    }
                }
                animate={false}
            />
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Project2