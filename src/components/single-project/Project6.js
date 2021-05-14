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
import sql from '../../assets/images/technologies/sql.svg'
import unsplash from '../../assets/images/technologies/unsplash.svg'




import mainImage from '../../assets/images/projects/project6.png'

import imageMin1 from '../../assets/images/project_screen_shots/project6/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project6/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project6/min/project_image3.png'
import imageMin4 from '../../assets/images/project_screen_shots/project6/min/project_image4.png'
import imageMin5 from '../../assets/images/project_screen_shots/project6/min/project_image5.png'

import imageMax1 from '../../assets/images/project_screen_shots/project6/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project6/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project6/max/project_image3.png'
import imageMax4 from '../../assets/images/project_screen_shots/project6/max/project_image4.png'
import imageMax5 from '../../assets/images/project_screen_shots/project6/max/project_image5.png'

const Project6 = (props)=>{   
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
                heading = 'White Balance'
                subheading = 'An application to fetch images via search'
                technologies ={
                    [unsplash,php,sql,html,css,js]
                }
                designed={true}
                linkTo='https://bit.ly/2Ry1wh9'
                linkName= 'VISIT : https://something-some.com'
                description={
                    <div className='description'>
                    This was the first project I created after I learnt JavaScript ans Backend PHP ans SQL.
                    <br/>It is a web application that allows user to search for any keywords and fetches images accordingly using the UnsplashAPI. It also has a login system, people can login and save images under there profile, and find them handy anytime.
                    <br/>This project is very special for me as all the journey started with this one.
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>UnplashAPI</li>
                            <li>php</li>
                            <li>mySQL</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                        </ul>

                    </div>
                }
                mainImage={mainImage}
                images = {
                    {
                        min : [imageMin1,imageMin2,imageMin3,imageMin4,imageMin5],
                        max : [imageMax1,imageMax2,imageMax3,imageMax4,imageMax5]
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

export default Project6