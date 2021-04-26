import React from 'react'
import  ReactDOM  from "react-dom";
import Typewriter from 'typewriter-effect';
import SplashBinary from './SplashBinary'
import '../index.css';
import '../style/SplashText.scss'

const SplashText = ()=>{
    return(
        <div className="welcome">
            <Typewriter 
            options = {{
                cursor : '█'
            }}
            onInit = {(typewriter)=>{
                typewriter.typeString('Hello World..')
                .pauseFor(1000)
                .typeString('<br><br> I am Sakujo..')
                .pauseFor(500)
                .typeString('<br><br><br> Follow the White Rabbit..')
                .pauseFor(500)
                .typeString('<br><br><br>The Matrix is Loading..')
                .callFunction(()=>{
                    ReactDOM.render(
                        //start rendering the matrix animation
                        <SplashBinary/>,
                        document.querySelector('.splash .binary')    
                    )
                })
                .start()
            }}
            />
        </div>       
    )

}

export default SplashText;