import React from 'react'
import '../style/CollapsableNav.scss'

// const showNav = ()=>{

// }

const CollapsableNav = ()=>{



    return(
        <div className="nav-wrapper">
            <div className="collapsable-nav">
                <ul className="nav-elements">   
                    <li className="nav-element"><a href="#">HOME</a></li>
                    <li className="nav-element"><a href="#">PORTFOLIO</a></li>
                    <li className="nav-element"><a href="#">SKILLs</a></li>
                    <li className="nav-element"><a href="#">ABOUT ME</a></li>
                    <li className="nav-element"><a href="#">CONTACT ME</a></li>
                </ul>
            </div>
            <div className="nav-back-drop"></div>
        </div>
    )
}

export default CollapsableNav