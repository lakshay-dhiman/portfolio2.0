import React from 'react'
import '../style/CollapsableNav.scss'
import $ from 'jquery'

const CollapsableNav = ()=>{

    const close_nav = ()=>{
        $('.hamburger').click();
    }
    
    const scrollSkills = ()=>{
        close_nav()
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 0);
    }

    const scrollPortfolio = ()=>{
        close_nav()
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 0);
    }

    const scrollContact = ()=>{
        close_nav()
        $('html, body').animate({
            scrollTop: $("#contact-me").offset().top
        },0);
    }

    const scrollAbout = ()=>{
        close_nav()
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        },0);
    }

    const scrollHome = ()=>{
        close_nav()
        $('html, body').animate({
            scrollTop: $("#hero").offset().top
        },0);
    }


    return(
        <div className="nav-wrapper">
            <div className="collapsable-nav">
                <ul className="nav-elements">   
                    <li className="nav-element"onClick={scrollHome}>HOME</li>
                    <li className="nav-element"onClick={scrollPortfolio}>PORTFOLIO</li>
                    <li className="nav-element"onClick={scrollSkills}>SKILLs</li>
                    <li className="nav-element"onClick={scrollAbout}>ABOUT ME</li>
                    <li className="nav-element"onClick={scrollContact} >CONTACT ME</li>
                </ul>
            </div>
            <div className="nav-back-drop"></div>
        </div>
    )
}

export default CollapsableNav 