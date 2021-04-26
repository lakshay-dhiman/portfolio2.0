import React ,{useRef,useEffect,Suspense, useState} from 'react'
import {Canvas,useThree,useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Roboto from "../assets/fonts/Roboto Black_Regular.json"
import { unmountComponentAtNode} from "react-dom";
import ReactDOM from "react-dom";

import Home from './Home'
import '../style/SplashBinary.scss'


//text component
const Text = ()=>{
  const text = useRef()
  const font = new THREE.FontLoader().parse(Roboto);

  //random character function
  const getRandomString = ()=>{
    const characters = [
      '!',
      '@',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '-',
      '+',
      '=',
      '|',
      ']',
      '[',
      '/',
      '?',
      '.',
      '>',
      '<',
      ',',
      '*',
      '`',
      '~',
      'θ',
      'ζ',
      'ξ',
      'β',
      'ω',
      'ρ',
      'τ',
      'ψ',
      'ι',
      'π',
      'α',
      'σ',
      'δ',
      'γ',
      'η',
      'ς',
      'λ',
      'μ',
      'ω',
    ]

    const getRandomCharacter = ()=>{
      return(
        characters[Math.floor(Math.random() * characters.length)]
      )
    }

    const text_content = []
    for(var i=0;i<60;i++){
      text_content.push(getRandomCharacter())
      text_content.push('\n')
    } 
    
    return text_content;
  }

  //random character funtion end

  //random positoin function
  const random_position = (scale)=>{
    return (Math.random()-0.5)*scale ;
  }

  return(
    <mesh
      ref={text}
      position={[random_position(500),random_position(500),random_position(500)]}
      scale={0.05}
    >
      {/* <textGeometry args={[getRandomString,{
            font,
        		height:1,
      }]}/> */}
      <textGeometry args={['0\n0\n1\n0\n0\n1\n1\n0\n1\n1\n1\n1\n0\n1\n1\n0\n1\n1\n1\n1\n0\n1\n1\n1\n1\n0\n0\n0\n0\n0\n0\n0\n1\n0\n1\n0\n1\n0\n0\n1\n0\n0\n1\n1\n0\n1\n1\n1\n1\n0\n1\n1\n0\n1\n1\n1\n1\n0\n1\n1\n1\n1\n0\n0\n0\n0\n0\n0\n0\n1\n0\n1\n0\n1',{
            font,
        		height:1,
      }]}/>
      <meshStandardMaterial attach='material' emissive={'green'}/>
    </mesh>
  )
}

// end of Text component


//renderer
const Renderer = ()=>{
    const {gl} = useThree()
    gl.setClearColor(0x000000,0)
    gl.setClearColor('black' )

    gl.setSize( window.innerWidth, (window.innerHeight+50) );
    return(
        null
    )
}

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(
//     () => {
//         const controls = new OrbitControls(camera, gl.domElement);
//         function onPositionChange(o) {
//         }
//         controls.addEventListener('change', onPositionChange);      
//         return () => {
//             controls.dispose();
//         };
      
//     },
//     [camera, gl]
//   );
  
//   return null;
// };

//camera
const Camera = ()=>{
    const {camera} = useThree()

    useFrame(()=>{
      // if(camera.rotation.x>-Math.PI/2){
      //   // camera.rotation.x+=0.1
      // }
      if(camera.position.z>-300){
        // camera.position.y-=1.5
        // if(camera.rotation.x>-Math.PI/2){
        //   camera.rotation.x-=0.003
        // }
        camera.position.z-=4
      }else{
        unmountComponentAtNode(document.querySelector('.splash .binary'));
        ReactDOM.render(
          <Home/>,
          document.querySelector('#root')
        )
      }
    })

    camera.position.set(0,-250,600)
    camera.lookAt(0,-250,0)
    camera.far = 10000000000000;
    return(
        null
    )
}


const SplashBinary = ()=>{

  const strings = []
  for (let index = 0; index < 50; index++) {
    strings.push(<Text key={index}/>)
  }
    return(
      <div className='binary_graphic'>
          <Canvas
            onCreated = {
              ()=>{
                unmountComponentAtNode(document.querySelector('.splash .text'));
              }
            }
          >
            <Renderer/>
            <Camera/>
            {/* <CameraController/> */}
            {strings}
          </Canvas>
      </div>
    )    
}

export default SplashBinary;
