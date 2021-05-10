import React from 'react'
import '../style/HeroBackground.scss'

const Box = ()=>{
    return(
        <div className="box"></div>
    )
}

const HeroBackground = ()=>{
  const pixels = []
  for (let index = 0; index < 50; index++) {
    pixels.push(<Box key={index}/>)
  }

    return(
        <div className="hero-background">
            {pixels}

        </div>
    )
}

export default HeroBackground