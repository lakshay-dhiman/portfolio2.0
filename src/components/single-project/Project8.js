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
import django from '../../assets/images/technologies/django.svg'



import mainImage from '../../assets/images/projects/project8.png'

import imageMin1 from '../../assets/images/project_screen_shots/project8/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project8/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project8/min/project_image3.png'
import imageMin4 from '../../assets/images/project_screen_shots/project8/min/project_image4.png'
import imageMin5 from '../../assets/images/project_screen_shots/project8/min/project_image5.png'
import imageMin6 from '../../assets/images/project_screen_shots/project8/min/project_image6.png'
import imageMin7 from '../../assets/images/project_screen_shots/project8/min/project_image7.png'
import imageMin8 from '../../assets/images/project_screen_shots/project8/min/project_image8.png'

import imageMax1 from '../../assets/images/project_screen_shots/project8/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project8/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project8/max/project_image3.png'
import imageMax4 from '../../assets/images/project_screen_shots/project8/max/project_image4.png'
import imageMax5 from '../../assets/images/project_screen_shots/project8/max/project_image5.png'
import imageMax6 from '../../assets/images/project_screen_shots/project8/max/project_image6.png'
import imageMax7 from '../../assets/images/project_screen_shots/project8/max/project_image7.png'
import imageMax8 from '../../assets/images/project_screen_shots/project8/max/project_image8.png'

const Project8 = (props)=>{   
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
                heading = 'Just Click Polls'
                subheading = 'An application to creat and participate in polls     '
                technologies ={
                    [sql,django,html,css,js]
                }
                designed={true}
                linkTo='https://bit.ly/2Ry1wh9'
                linkName= 'VISIT : https://something-some.com'
                description={
                    <div className='description'>
                    This is a web-application created in Django framework of python.
                    <br/>It is a simple, yet powefull application, where you can create random polls on the go, participate in polls, and also get a detailed overview of the responsive of the polls created by you. You need to do a simple login with a unique username and you are good to go. The unique point in this poll application is that there is no limit on the number of options you can have for a single question, add as many as you want.
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>Django</li>
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
                        min : [imageMin1,imageMin2,imageMin3,imageMin4,imageMin5,imageMin6,imageMin7,imageMin8],
                        max : [imageMax1,imageMax2,imageMax3,imageMax4,imageMax5,imageMax6,imageMax7,imageMax8]
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

export default Project8