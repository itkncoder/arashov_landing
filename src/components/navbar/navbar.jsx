import logo from '@/assets/images/Logo.png'
import Image from "next/image"
import {memo} from "react";

const Navbar = () => {
  return (
     <nav className="navbar">
     <div className="navbar__logo">
       <Image src={logo} alt="Logo" />
     </div>
     <div className="navbar__buttons">
       <button className="login-button">LOG IN</button>
       <button style={{background: "#0135d3"}} className="register-button">REGISTER</button>
     </div>
   </nav>
  )
}

export default memo(Navbar)
