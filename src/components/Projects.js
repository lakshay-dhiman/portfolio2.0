import React from 'react'

const Projects = (props)=>{
    return(
        <div className='project'>
            <img src={props.src} alt={props.alt}/>
            <div className="desc">
                {/* <h1>{props.heading}</h1>
                <p>{props.desc}</p> */}
            </div>
        </div>        
    )

}

export default Projects