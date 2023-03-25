import InfoImage from '@/assets/images/tradeInfoimage.png'
import Image from "next/image"

const TraderInfo = () => {
     return (
          <div className='tradeInfo'>
               <div className="Infobox">
                    <div className="infoTextBox">
                         <div className="boxTitle">TRADER KIM?</div>

                         <div className="boxText">
                              <p>Trader:</p>
                              <div className="card">
                                   <div className="line"></div>
                                   <p>Moliyaviy bozorni tahlil qiladi</p>
                              </div>
                              <div className="card">
                                   <div className="line"></div>
                                   <p>Aktivlarni sotib oladi va sotadi</p>
                              </div>
                              <div className="card">
                                   <div className="line"></div>
                                   <p>Narxlar farqidan daromad oladi</p>
                              </div>
                         </div>
                         <div className="linearCard">
                         Crypto Trader - Birjalarda kriptovalyutalar bilan savdo qiluvchi  shaxs.U  texnik tahlil, fundamental tahlil va turli  xil savdo strategiyalardan foydalanadi
                         </div>
                    </div>
                    <div className="infoImgBox">
                         <Image src={InfoImage} alt="InfoImage" />
                         <div className="brightShadow"></div>
                    </div>
               </div>
          </div>
     )
}

export default TraderInfo
