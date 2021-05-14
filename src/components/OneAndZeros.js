import React,{useEffect, useState} from 'react'

const OnesAndZeros = ()=>{
    const getRandomString = ()=>{
        const characters = [0,1]

        const getRandomCharacter = ()=>{
            return(
                characters[Math.floor(Math.random() * 2)]
            )
        }

        const text_content = []
        for(var i=0;i<80;i++){
        text_content.push(getRandomCharacter())
        text_content.push('\n')
        } 
        
        return text_content.join('');
    }
    const string = getRandomString()
    const [numbers, setNumbers] = useState(string)

    useEffect(()=>{
        const interval = setInterval(() => {
            const string = getRandomString()
            setNumbers(string)
            // console.log('working');
        }, 300);
        return ()=> clearInterval(interval)      
    },[numbers])

    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         const string = getRandomString()
    //         setNumbers(string)
    //         changeCounter(prevCounter => prevCounter + 1);
    //         // console.log('working');
    //     }, 1000);          
    // },[])


    
    return(
        <div>
            <h1>
                {numbers}
            </h1>
        </div>
    )
}

export default OnesAndZeros