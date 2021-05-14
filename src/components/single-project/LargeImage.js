import React from 'react'
import {unmountComponentAtNode} from "react-dom";


const LargeImage = (props)=>{

    const unmountOverlay = ()=>{
        unmountComponentAtNode(document.querySelector('.overlay-image'))
        document.querySelector('.overlay-image').style.zIndex = '-1'
    }

    return(
        <div className="image-overlay">
            <div className="backdrop" onClick={unmountOverlay}></div>
            <div className="image">
                <img src={props.src} alt="ovelay"/>
            </div>
        </div>
    )
}

export default LargeImage