import React from 'react'
import Image from "next/image"

const SocialLink = ({link,img}) => {
  return (
    <>
      <a href={link}><Image src={img} alt="social" /></a>
    </>
  )
}

export default SocialLink
