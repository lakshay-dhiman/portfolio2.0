import React,{useState, useEffect} from 'react'
import '../style/Widget.scss'

const Time = ()=>{
    useEffect(() => {
        setInterval(() => {
            const now = new Date()
            const time = [
                now.getHours(),
                ':',
                minutes(now.getMinutes())
            ].join('');

            const day = now.getDay()
            setDayNow(day)  
            setTime(time) 
            console.log('time changed');
        }, 1000);
    }, [])


    const minutes = (minute)=>{
        let arr=[]
        if(minute<10){
            arr.push('0')
            arr.push(minute)
            return(arr.join(''))
        }else{
            return(minute)
        }
    }
    
    const weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thur";
    weekday[5] = "Fri";
    weekday[6] = "Sat"; 


    const [dayNow, setDayNow] = useState()
    const [time, setTime] = useState('loading')
    return(
        <h1 className='time'>{time}, {weekday[dayNow]}</h1>
    )
}

const DateNow = ()=>{
    useEffect(()=>{
        setInterval(() => {
            const now = new Date()
            const date = [
            now.getDate(),
            " ",
            month[now.getMonth()],
            ",",
            now.getFullYear()
            ]

        setDate(date)
        }, 1000);        
    })

    
    const month = new Array(12)
    month[0] = 'jan';
    month[1] = 'feb';
    month[2] = 'march';
    month[3] = 'april';
    month[4] = 'may';
    month[5] = 'june';
    month[6] = 'july';
    month[7] = 'aug';
    month[8] = 'sep';
    month[9] = 'oct';
    month[10] = 'nov';
    month[11] = 'dec';

    const [date, setDate] = useState('loading')
    return(
        <h1 className='date'>{date}</h1>
    )
}

const Widget = ()=>{

    return(
        <div className='widget'>
            <Time/>
            <DateNow />
            <h1 className='available'>sakujo is available</h1>
        </div>
    )
}

export default Widget