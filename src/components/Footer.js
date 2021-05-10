import React from 'react'
import {Call,Github,LinkedIn,Mail,Whatsapp} from '../assets/images/social_icons/SocialIcons'
import '../style/Footer.scss'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="social-icons-footer">
                <a href="" className="social-link"><Github color='#FFFFFF'/></a>
                <a href="" className="social-link"><Whatsapp color='#FFFFFF'/></a>
                <a href="" className="social-link"><LinkedIn color='#FFFFFF'/></a>
                <a href="" className="social-link"><Mail color='#FFFFFF'/></a>
                <a href="" className="social-link"><Call color='#FFFFFF'/></a>
            </div>
            <div className="copywrite">
                SAKUJO | <span>&#169; 2021</span>
            </div>
            <div className="stay-safe">
                Stay hydrated, Stay safe &#128155;
            </div>
        </div>
    )
}

export default Footer