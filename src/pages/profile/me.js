import Image from "next/image"
import logo from "@/assets/images/Logo.png"
import tg from "@/assets/images/tg.png"
import user from "@/assets/images/user.png"
import Accordion from "@/components/accordion/accordion"
import Link from "next/link"
import { useState } from "react"

const Me = () => {

    const [dropdown, setDropdown] = useState(false)
    const [dropdownNow, setDropdownNow] = useState('')

    const arr = [
        {
            num: 34545
        },
        {
            num: 34543
        },
        {
            num: 34542
        },
    ]

    return (  
        <div onClick={(e) => {
            if (!e.target.classList.contains("drowdown-item")) {
                setDropdownNow(false)
            }
        }} className="max-w-screen-xl mx-auto">
            <header className="flex justify-between items-center py-8">
                <Link href="/">
                    <Image src={logo} alt="Logo" className="w-40" />
                </Link>  
                <div>
                    <Image src={user} className="w-12 cursor-pointer rounded-full hover:scale-110 transition-all" />
                </div>
            </header>
            <main>
                <div className="flex justify-between gap-14 items-center my-4 boxshadowed3 py-8 px-14 rounded-xl">
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-envelope text-xl"></i>
                        <p className="mezzardBold">EMAIL :</p>
                        <p className="mezzardBold">itkncoder@gmail.com</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-phone text-xl"></i>
                        <p className="mezzardBold">PHONE :</p>
                        <p className="mezzardBold">+998 90 787 61 54</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-credit-card text-xl"></i>
                        <p className="mezzardBold">TO'LOV :</p>
                        <p className="mezzardBold text-green-600">To'langan</p>
                        <a href="./" className="flex justify-center items-center bg-blue-700 py-1 hover:bg-blue-800 px-6 rounded-lg gap-3 mezzardBold ml-4" ><Image src={tg} className="w-6" />Gruppa</a>
                    </div>
                </div>
                <div className="mt-8">
                    {arr.map(function(item, index) {
                        return <Accordion indexOf={index} setDropdown={setDropdown} dropdown={dropdown} dropdownNow={dropdownNow} setDropdownNow={setDropdownNow} />
                    })}
                </div>
            </main>
        </div>
    );
}
 
export default Me;