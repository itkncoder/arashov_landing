import {memo} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import corona from "@/assets/images/corona.png"
import Image from "next/image"
import Link from "next/link"

const cardData = [
     {
       title: "PREMIUM",
       price: "200$",
       info:'25 ta video darslik',
       discount:"",
       description: [
         "Blockchain, Kriptovalyuta",
         "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
         "Binance birjasi to’liq o’rgatiladi",
         "Kripto hamyonlardan foydalanish",
         "Riskni boshqarish (Risk menejement)",
         "Trading (Texnik analiz)",
         "Kurator bilan savol javob "
       ],
       button: "SOTIB OLISH",
       link: "/profile/register"
     },
     {
       title: "ONLINE",
       price: "500$",
       discount:"300$",
       info:'OFFLINE kurs bilan bir vaqtda dars o’tiladi',
       description: [
         "Blockchain, Kriptovalyuta",
         "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
         "Binance birjasi to’liq o’rgatiladi",
         "Kripto hamyonlardan foydalanish",
         "Riskni boshqarish (Risk menejement)",
         "Trading (Texnik va fundamental analiz)",
         "O’zim foydalanadigan strategiyalar",
         "O’quvchilar orasida Chat guruh"
       ],
       button: "ULANISH",
       link: "https://t.me/ARASHOV_TRADER"
     },
     {
       title: "OFFLINE",
       price: "1000$",
       discount:"500$",
       info:'',
       description: [
        "Blockchain, Kriptovalyuta",
        "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
        "Binance birjasi to’liq o’rgatiladi",
        "Kripto hamyonlardan foydalanish",
        "Riskni boshqarish (Risk menejement)",
        "Trading (Texnik va fundamental analiz)",
        "O’zim foydalanadigan strategiyalar",
        "O’quvchilar orasida Chat guruh",
         "Kurator bilan savol javob ",
         "Ofisga kelib o’rganish imkoniyati",
         "Traderlar bilan fikr almashish ",
         "Dars jarayonida real hisobda savdo qilishni o’rganish",
       ],
       button: "ULANISH",
       link: "https://t.me/ARASHOV_TRADER"
     },
     {
       title: "VIP",
       price: "10000$",
       discount:"5000$",
       info:"*Depozitingizda 20.000$ pul bo’lishi kerak Dars davomida shu depozit bilan kurs  to'lovlarini ham  chiqarib  olasiz",
       description: [
        "Blockchain, Kriptovalyuta",
        "Kriptovalyutada daromad qilish yo'llari (Investitsiya, trading, mining, P2P)",
        "Binance birjasi to’liq o’rgatiladi",
        "Kripto hamyonlardan foydalanish",
        "Riskni boshqarish (Risk menejement)",
        "Trading (Texnik va fundamental analiz)",
        "O’zim foydalanadigan strategiyalar",
        "O’quvchilar orasida Chat guruh",
         "Kurator bilan savol javob ",
         "Ofisga kelib o’rganish imkoniyati",
         "Traderlar bilan fikr almashish ",
         "Dars jarayonida real hisobda savdo qilishni o’rganish",
         "DICO, IDO, P2P arbitraj",
         "Shaxsan o’zim bilan savdo qilasiz",
       ],
       button: "ULANISH",
       link: "https://t.me/ARASHOV_TRADER"
     },
     
   ];

const PriceData = () => {
  return (
     <div data-aos="fade-up" className="card-container wrapper cursor-pointer">
     <Swiper
      breakpoints={{
        420: {
          slidesPerView: 1.1,
        },
        460: {
          slidesPerView: 1.2,
        },
        580: {
          slidesPerView: 1.4,
        },
        720: {
          slidesPerView: 1.8,
        },
        820: {
          slidesPerView: 2.2,
        },
        900: {
          slidesPerView: 2.5,
        },
        950: {
          slidesPerView: 2.8,
        },
        1000: {
          slidesPerView: 3.1,
        },
        1080: {
          slidesPerView: 3.6,
        },
        1300: {
          slidesPerView: 4,
        }
      }}
      spaceBetween={1}
      slidesPerView={1}
      slidesPerGroup={1}
     >
      {cardData.map((card, index) => (
        <SwiperSlide>
          <div key={index} className={index === 3 ? "card" : "card"} id={index === 3 && "card-4"}>
          <div className="card-title">
            <div className={index !== 3 ? "bright1" : "bright1 bringht4"}></div>
            {index === 3 && <Image src={corona} className="corona" width={20} />}
            <p className={index === 3 ? "mezzardBold vip-title" : "mezzardBold"}>{card.title}</p>
          </div>
            <div className="card-content">
              <ul className="card-description">
              {cardData[index].description.map((item, i)=>(
                <li>{item}</li>
              ))}     
              </ul>

              {index !== 2 && <div className={index === 3 ? "video-course-four" : "video-course"}>{card?.info}</div>}
              
            <div className="card-footer">
              <h4 className='discount mezzardBold'>{card.discount}</h4>
              <p className="card-price mezzardBold">{card.price}</p>
              <div className={index !== 3 ? "buy" : "nthfour buy"}>
                {index !==3 ? <p><Link className="not4 mezzardBold" href={card?.link}>{card?.button}</Link></p>:<p><a className="fourulanish mezzardBold" href="./">{card?.button}</a></p> }
                {index ===3 ? <div className='mask'></div> : null}
              </div>
              
            </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
     </Swiper>
     
   </div>
  )
}

export default memo(PriceData)
