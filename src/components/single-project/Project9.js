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
import sql from '../../assets/images/technologies/sql.svg'
import react from '../../assets/images/technologies/react.svg'
import threejs from '../../assets/images/technologies/threejs.svg'
import gsap from '../../assets/images/technologies/gsap.png'





import mainImage from '../../assets/images/projects/project9.png'

import imageMin1 from '../../assets/images/project_screen_shots/project9/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project9/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project9/min/project_image3.png'
import imageMin4 from '../../assets/images/project_screen_shots/project9/min/project_image4.png'

import imageMax1 from '../../assets/images/project_screen_shots/project9/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project9/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project9/max/project_image3.png'
import imageMax4 from '../../assets/images/project_screen_shots/project9/max/project_image4.png'
const Project9 = (props)=>{   
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
                heading = 'My Portfolio'
                subheading = 'My current portfolio'
                technologies ={
                    [sql,react,threejs,gsap,html,css,js]
                }
                designed={true}
                linkTo='http://sakujo.in'
                linkName= 'VISIT : sakujo.in'
                description={
                    <div className='description'>
                    This is the website you are currently on and it simply resides all my best projects.
                    <br/>It's been a greate journey building this portfolio from designing to coding. The design is inspired by THE MATRIX the movie, and i have tried to keep the asthetic alive whatsoever.
                    <br/><br/>I have use GSAP for the amazing animation stuff and THREE.js was used for the splash screen 3-d matrix effect.
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>THREE.js</li>
                            <li>GSAP</li>
                            <li>SQL</li>
                            <li>html</li>
                            <li>saas</li>
                            <li>javascript</li>
                            <li>css</li>
                        </ul>
                    </div>
                }
                mainImage={mainImage}
                images = {
                    {
                        min : [imageMin1,imageMin2,imageMin3,imageMin4],
                        max : [imageMax1,imageMax2,imageMax3,imageMax4]
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

export default Project9