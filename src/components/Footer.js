import React from 'react'
import {Call,Github,LinkedIn,Mail,Whatsapp} from '../assets/images/social_icons/SocialIcons'
import '../style/Footer.scss'

const Footer = ()=>{
    return(
        <div className='footer'>
            <div className="social-icons-footer">
                        <a href="https://github.com/lakshay-dhiman" target = '_blank'  rel="noreferrer" className="social-link"><Github color='#FFF'/></a>
                        <a href="https://api.whatsapp.com/send?phone=+919518630902&text=Hi%20there%20!!" target = '_blank'  rel="noreferrer"  className="social-link"><Whatsapp color='#FFF'/></a>
                        <a href="https://www.linkedin.com/in/lakshay-dhiman-6b337917a/" target = '_blank'  rel="noreferrer"  className="social-link"><LinkedIn color='#FFF'/></a>
                        <a href="mailto:sakujo1208@gmail.com" target = '_blank'  rel="noreferrer"  className="social-link"><Mail color='#FFF'/></a>
                        <a href="tel:9518630902" target = '_blank'  rel="noreferrer" className="social-link"><Call color='#FFF'/></a>            </div>
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