import React,{useState} from 'react'
import {Call,Github,LinkedIn,Mail,Whatsapp} from '../assets/images/social_icons/SocialIcons'

const ContactHero = ()=>{
    const [whatsapp, setWhatsap] = useState('#959595')
    const [phone, setPhone] = useState('#959595')
    const [github, setGithub] = useState('#959595')
    const [mail, setMail] = useState('#959595')
    const [linkedIn, setLinkedIn] = useState('#959595')

    const changeWhatsap = ()=>{
        setWhatsap('#00770F')
    }

    const changePhone = ()=>{
        setPhone('#00770F')
    }

    const changeGithub = ()=>{
        setGithub('#00770F')
    }

    const changeLinkedIn = ()=>{
        setLinkedIn('#00770F')
    }

    const changeMail = ()=>{
        setMail('#00770F')
    }



    const backWhatsap = ()=>{
        setWhatsap('#959595')
    }

    const backPhone = ()=>{
        setPhone('#959595')
    }

    const backGithub = ()=>{
        setGithub('#959595')
    }

    const backLinkedIn = ()=>{
        setLinkedIn('#959595')
    }

    const backMail = ()=>{
        setMail('#959595')
    }
    return(
        <div className="social-links">
                <a href="#" className="social-link" onMouseEnter={changeGithub} onMouseLeave={backGithub} ><Github color={github} /></a>
                <a href="#" className="social-link" onMouseEnter={changeWhatsap} onMouseLeave={backWhatsap} ><Whatsapp color={whatsapp} /></a>
                <a href="#" className="social-link" onMouseEnter={changeLinkedIn} onMouseLeave={backLinkedIn} ><LinkedIn color={linkedIn} /></a>
                <a href="#" className="social-link" onMouseEnter={changeMail} onMouseLeave={backMail} ><Mail color={mail} /></a>
                <a href="#" className="social-link" onMouseEnter={changePhone} onMouseLeave={backPhone}  ><Call color={phone} /></a>
        </div>
    )
}

export default ContactHero