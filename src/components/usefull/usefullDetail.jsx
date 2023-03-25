import Image from "next/image"

const UsefullDetail = ({title,description,img}) => {
  return (
    <div className='usefull__box'>
    <div className="imageBox">
     <Image src={img} alt="img" width={30} />
    </div>
      <div className="box__title">{title}</div>
      <div className="box__description">{description}</div>
    </div>
  )
}

export default UsefullDetail
