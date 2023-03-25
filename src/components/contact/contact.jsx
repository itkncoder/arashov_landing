import React from 'react';
import TelegramIcon from '@/assets/images/telegram-icon.png'
import ContacrImage from '@/assets/images/contact.png'

import Image from "next/image"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-text">
        <h2>SAVOLLAR BO’LSA MENEDJERGA MUROJAAT QILISHINGIZ MUMKIN</h2>
        <div className="telegram-contact">
          <a href="#">
            <Image src={TelegramIcon} alt="TelegramIcon" width={37} />
            <p>@ARASHOV_TRADER</p>
          </a>          
        </div>
        <p className='phone-number'>+998 (95) 505-11-99</p>
      </div>
      <div className="contact-image">
        <Image src={ContacrImage} alt="Contact us" />
      </div>
    </section>
  );
};

export default Contact;

