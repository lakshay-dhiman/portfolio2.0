import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import Footer from '../Footer'
import SingleProject from './SingleProject'
import mainImage from '../../assets/images/projects/project1.png'
import '../../style/SingleProject.scss'
import back from '../../assets/images/misc/back.svg'
import Logo from '../Logo'

import html from '../../assets/images/technologies/html.svg'
import css from '../../assets/images/technologies/css.svg'
import js from '../../assets/images/technologies/javascript.svg'
import sass from '../../assets/images/technologies/sass.svg'

import imageMin1 from '../../assets/images/project_screen_shots/project1/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project1/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project1/min/project_image3.png'
import imageMin4 from '../../assets/images/project_screen_shots/project1/min/project_image4.png'

import imageMax1 from '../../assets/images/project_screen_shots/project1/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project1/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project1/max/project_image3.png'
import imageMax4 from '../../assets/images/project_screen_shots/project1/max/project_image4.png'

const Project1 = (props)=>{
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
            <Logo/>
            <div className="back" onClick={goBack}> 
                <img src={back} alt=""/>
            </div>
            <SingleProject
                heading = 'Chandan WaterProofing'
                subheading = 'A website for a local bussiness'
                technologies ={
                    [html,css,js,sass]
                }
                designed={true}
                linkTo='https://chandan-waterproofing.in'
                linkName= 'VISIT : chanda-waterproofing.in'
                description={
                    <div className='description'>
                        Chandan Water proofing contractor is a chandigarh based local bisiness.
                        I worked worked with the company to build a website, to built an online presence of the bisness and get more clients over the web.
                        The website was Designed and Developed by me.
                        <br/><br/>Technologies used : 
                        <ul>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>sass</li>
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

export default Project1