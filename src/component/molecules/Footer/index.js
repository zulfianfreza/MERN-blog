import React from 'react';
import './Footer.scss';
import {DiscordIcon, FacebookIcon, GithubIcon, InstagramIcon, Logo, TelegramIcon, TwitterIcon} from '../../../assets';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img src={img} className="icon-medsos" alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img src={Logo} className="logo" alt="logo"/>
                </div>
                <div className="social-wrapper">
                    <Icon img={FacebookIcon} />
                    <Icon img={TwitterIcon} />
                    <Icon img={InstagramIcon} />
                    <Icon img={TelegramIcon} />
                    <Icon img={GithubIcon} />
                    <Icon img={DiscordIcon} />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
            
        </div>
    )
}

export default Footer