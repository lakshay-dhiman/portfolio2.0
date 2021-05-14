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
import react from '../../assets/images/technologies/react.svg'
import threejs from '../../assets/images/technologies/threejs.svg'




import mainImage from '../../assets/images/projects/project7.png'

import imageMin1 from '../../assets/images/project_screen_shots/project7/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project7/min/project_image2.png'

import imageMax1 from '../../assets/images/project_screen_shots/project7/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project7/max/project_image2.png'

const Project7 = (props)=>{   
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
                heading = '3d model'
                subheading = 'Just  a 3d model with earth and the sun'
                technologies ={
                    [threejs,react,html,css,js]
                }
                designed={true}
                linkTo='https://bit.ly/2Ry1wh9'
                linkName= 'VISIT : https://something-some.com'
                description={
                    <div className='description'>
                    It is a very simple web application which shows earth revolving around the sun.
                    <br/>I built this application while exploring the power of 3d rendering over web canvas. I Used three.js to create this model. 
                    <br/>I created the model of sun and easth on my own in three.js and then added the animation. This project gave me good experience in 3d javascript using three.js                    
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>Three.js</li>
                            <li>html</li>
                            <li>react</li>
                            <li>saas</li>
                            <li>javascript</li>
                            <li>css</li>
                        </ul>
                    </div>
                }
                mainImage={mainImage}
                images = {
                    {
                        min : [imageMin1,imageMin2],
                        max : [imageMax1,imageMax2]
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

export default Project7