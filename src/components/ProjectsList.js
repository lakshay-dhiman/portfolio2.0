import React from 'react'
import {Link} from 'react-router-dom';



const ProjectsList = (props)=>{
    return(
        <div className='project-wrapper'>
            <Link to={props.href} className="link">
                <img src={props.src} alt={props.alt}/>
                <div className="overlay-dark"></div>
                <div className="overlay-knowmore">
                    know More 
                </div>
            </Link>
        </div>
    )
}
export default ProjectsList