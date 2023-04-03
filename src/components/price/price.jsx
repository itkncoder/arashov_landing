import PriceData from "./priceData";
import Binance from '@/assets/images/Binance_logo.svg.png'
import Payme from '@/assets/images/payme-logo.png'
import Tether from '@/assets/images/Tether_Logo.svg.png'
import Humo from '@/assets/images/system-humo_w.png'
import Uzcard from '@/assets/images/uzcard.png'
import Image from "next/image"
import {memo} from "react";
import Link from "next/link"

const Price = () => {
  return (
    <section className="Price-section"> 
      <PriceData />
      <div className="sponsor">
          <Image className="bigtel" src={Binance} alt="Binance" />
          <Image className="bigtel" src={Payme} alt="Payme" />
          <Image className="bigtel" src={Tether} alt="Tether" />
          <Image className="nonetel" src={Humo} alt="Humo" />
          <Image className="nonetel" src={Uzcard} alt="Uzcard" />
     </div>
     <div className="payment-crypto">
      <Link href={localStorage.getItem('token') ? "/checkout" : "/profile/profile" } className="mezzardBold">KRIPTOVALYUTA ORQALI TO’LOV QILISH</Link>
     </div>
    </section>
  );
};

export default memo(Price)