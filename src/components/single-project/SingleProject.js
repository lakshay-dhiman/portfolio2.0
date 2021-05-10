import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import Footer from '../Footer'
import '../../style/SingleProject.scss'

import {gsap} from 'gsap'
import LargeImage from './LargeImage'


const Image = (props)=>{
    const showOverlay = (e)=>{
        if(e.target.dataset.max){
            document.querySelector('.overlay-image').style.zIndex = '8'
            ReactDOM.render(
                <LargeImage src={e.target.dataset.max}/>,
                document.querySelector('.overlay-image')
            )            
        }

    }

    return(
        <img src={props.src} alt="somthing" data-max={props.max} onClick={showOverlay}/>
    )
}



const SingleProject = (props)=>{

    //just for scroll issues
    document.documentElement.scrollTop = 0

    useEffect(()=>{
        if(props.animate){
            gsap.from(document.querySelectorAll('.logo, .back'),{
                opacity: 0,
                y:-50,
                duration:1
            })

            gsap.from(document.querySelectorAll('.header '),{
                opacity: 0,
                marginTop:100,
                duration:1
            })

            gsap.from(document.querySelectorAll('.main'),{
                opacity:0,
                duration:1,
                y:-50
            })            
        }

    })

    const some = ()=>{
        console.log('somethign');
    }


    const technologies = []
    const images = []
    const designed = []

    for(let i =0; i<props.technologies.length; i++){
        technologies.push(
            <Image src={props.technologies[i]} max={null}/>
        )
    }

    for(let i =0; i<props.images.min.length; i++){
        images.push(
            <Image src={props.images.min[i]} max={props.images.max[i]} onClick={some}/>
        )
    }

    if(props.designed){
        designed.push(
            <p>* designed and coded by me</p>
        )
    }else{
        designed.push(
            <p>* NOT designed by me</p>
        )
    }

    return(
        <div className='noPointer'> 
        <div className="overlay-image"></div>
            <div className='header'>
                <div className="header-wrapper">
                    <div className="left-part">
                        <h1>{props.heading}</h1>
                        <h2>{props.subheading}</h2>                    
                    </div>
                    <div className="right-part">
                        <div className="technologies">
                            <p>Technologies Used</p>
                            {technologies}
                        </div>
                        <div className="visit">
                            <a href={props.linkTo} target='_blank'>{props.linkName}</a>
                            <p>{designed}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main'>
                <div className="main-info">
                    {props.description}
                    <div className="project-image">
                        <img src={props.mainImage} alt="main"/>
                    </div>                    
                </div>
                <div className="image-gallery">
                    <h1>
                        Image Gallery
                    </h1>
                    <div className="images-block">
                        {images}
                    </div>
                </div>
                <div className="link-to-big">
                    <a href={props.linkTo} target='_blank'>VISIT THE PROJECT HERE</a>
                </div>
            </div>
        </div>

    )
}

export default SingleProject