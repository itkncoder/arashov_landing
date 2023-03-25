import { useState } from 'react';
import Logo from '@/assets/images/Logo.png'
import SocialLink from './socialLink';
import TelegramIcon from '@/assets/images/telegram-icon.png'
import InstagramIcon from '@/assets/images/social_insta.png'
import TiktokIcon from '@/assets/images/social_tiktok.png'
import YouTubeIcon from '@/assets/images/You-Tube.png'
import Image from "next/image"

const Footer = () => {

  const date = useState(new Date().getFullYear())

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
          <Image src={Logo} alt="Logo" />
          <p>© {date} ARASHOV. All rights reserved.</p>
        </div>
        <div className="social">
          <a href="#">Home</a>
          <a href="">Contact</a>
          <SocialLink link={"https://telegram.com"} img={TelegramIcon} />
          <SocialLink link={"https://instagram.com"}  img={InstagramIcon} />
          <SocialLink link={"https://tiktok.com"}  img={TiktokIcon} />
          <SocialLink link={"https://youtube.com"}  img={YouTubeIcon} />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
