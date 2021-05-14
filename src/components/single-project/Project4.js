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
import php from '../../assets/images/technologies/php.svg'

import mainImage from '../../assets/images/projects/project4.png'

import imageMin1 from '../../assets/images/project_screen_shots/project4/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project4/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project4/min/project_image3.png'

import imageMax1 from '../../assets/images/project_screen_shots/project4/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project4/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project4/max/project_image3.png'

const Project4 = (props)=>{
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
                heading = 'Google Meet AutoExit'
                subheading = 'A google chrome extension built be me'
                technologies ={
                    [html,css,js,php]
                }
                designed={true}
                linkTo='https://bit.ly/2Ry1wh9'
                linkName= 'VISIT : https://something-some.com'
                description={
                    <div className='description'>
                    This is my earlier portfolio.
                    <br/>Actually this was my first ever portfolio, and I got many leads through this one. I thought if a update looking for a better designed and mature portfolio.
                    <br/>I got much mature with my designing skill since this one, but I still mention it in my postfolio as the coding part is still pretty strong in this one.
                    <br/>Just check this one also, used GSAP for the first time in this one.    
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>GSAP</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>php</li>
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

export default Project4