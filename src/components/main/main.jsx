import MainImage from "@/assets/images/MainImage.png"
import MainImage2 from '@/assets/images/MainImage2.png'
import CheckIcon from '@/assets/images/checkIcon.png'
import Image from "next/image"

const Main = () => {
  return (
    <main className="main">
     <div className="main__left">
       <div className="main__left__header">
       <h1>KRIPTOVALYUTADA DAROMAD QILISHNI O’RGANING</h1>
       <p>Biz bilan birgalikda dunyoning istalgan nuqtasidan turib pul ishlang</p>
       <button className='learn__more'>BATAFSIL MA’LUMOT</button>
       </div>
       
     </div>
     <div className="main__right">
       <div className="background__bright"></div>
       <div className="background__shadow"></div>
       <div className="name">
        <p>ARASHOV</p>
        <Image src={CheckIcon} alt="Check" />
       </div>
       <Image className='main__image' src={MainImage} alt="MainImage" />
       <Image className='main__image2' src={MainImage2} alt="MainImage" />
     </div>
   </main>
   
  )
}

export default Main
