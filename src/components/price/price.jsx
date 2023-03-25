import PriceData from "./priceData";
import Binance from '@/assets/images/Binance_logo.svg.png'
import Payme from '@/assets/images/payme-logo.png'
import Tether from '@/assets/images/Tether_Logo.svg.png'
import Humo from '@/assets/images/system-humo_w.png'
import Uzcard from '@/assets/images/uzcard.png'
import Image from "next/image"

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
      <p>KRIPTOVALYUTA ORQALI TO’LOV QILISH</p>
     </div>
    </section>
  );
};

export default Price


