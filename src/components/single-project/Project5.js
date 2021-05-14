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
import react from '../../assets/images/technologies/react.svg'
import sass from '../../assets/images/technologies/sass.svg'
import spotify from '../../assets/images/technologies/spotify.svg'


  



import mainImage from '../../assets/images/projects/project5.png'

import imageMin1 from '../../assets/images/project_screen_shots/project5/min/project_image1.png'
import imageMin2 from '../../assets/images/project_screen_shots/project5/min/project_image2.png'
import imageMin3 from '../../assets/images/project_screen_shots/project5/min/project_image3.png'

import imageMax1 from '../../assets/images/project_screen_shots/project5/max/project_image1.png'
import imageMax2 from '../../assets/images/project_screen_shots/project5/max/project_image2.png'
import imageMax3 from '../../assets/images/project_screen_shots/project5/max/project_image3.png'

const Project5 = (props)=>{   
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
                heading = 'Personify'
                subheading = 'An appication to fetch lyrics'
                technologies ={
                    [spotify,php,sass, react,html,css,js]
                }
                designed={true}
                linkTo='https://bit.ly/2Ry1wh9'
                linkName= 'VISIT : https://something-some.com'
                description={
                    <div className='description'>
                    This is a web app, which provides you with the lyrics of the song playing on your spotify account, you just need to logIn into the application with your spotify account, and the application fetches the lyrics to the song currently playing from the Genius.com. You get lyrics for most of the songs.
                    <br/>I used the spotifyAPI to get the song currently playing, and created my own API to fetch lytics using web scrapping.
                    <br/><br/>Technologies Used:
                        <ul>
                            <li>SpotifyAPI</li>
                            <li>Web Scraping</li>
                            <li>API</li>
                            <li>saas</li>
                            <li>php</li>
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>

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

export default Project5