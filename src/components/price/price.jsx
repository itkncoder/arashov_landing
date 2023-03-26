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
          <Image src={Binance} alt="Binance" />
          <Image src={Payme} alt="Payme" />
          <Image src={Tether} alt="Tether" />
          <Image src={Humo} alt="Humo" />
          <Image src={Uzcard} alt="Uzcard" />
     </div>
     <div className="payment-crypto">
      <Link href="./" className="mezzardBold">KRIPTOVALYUTA ORQALI TO’LOV QILISH</Link>
     </div>
    </section>
  );
};

export default memo(Price)


