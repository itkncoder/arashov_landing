import {memo} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

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
       ]
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
       ]
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
       ]
     },
     {
       title: "VIP",
       price: "200$",
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
       ]
     },
     
   ];

const PriceData = () => {
  return (
     <div data-aos="fade-up" className="card-container">
     <Swiper
      breakpoints={{
        850: {
          slidesPerView: 3.5,
        }
      }}
      spaceBetween={5}
      slidesPerView={1}
     >
      {cardData.map((card, index) => (
        <SwiperSlide>
          <div key={index} className="card">
          <div className="card-title">
          <div className="bright1"></div>
          <p>{card.title}</p>
          </div>
            <div className="card-content">
              <ul className="card-description">
              {cardData[index].description.map((item, i)=>(
                <li>{item}</li>
              ))}     
              </ul>

              <div className="video-course">{card.info}</div>
              
              <div className="card-footer">
            <h4 className='discount'>{card.discount}</h4>
              <p className="card-price">{card.price}</p>
              <div className="buy">
              {index !==3 ? <p><a href="./">SOTIB OLISH</a></p>:<p><a href="./" className="nthfour">ULANISH</a></p> }
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
