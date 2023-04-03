import Image from "next/image"
import logo from "@/assets/images/Logo.png"
import tg from "@/assets/images/tg.png"
import user from "@/assets/images/user.png"
import Accordion from "@/components/accordion/accordion"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"

const Me = () => {

    const [dropdown, setDropdown] = useState(false)
    const [dropdownNow, setDropdownNow] = useState('')

    const [dataUser, setDataUser] = useState([])
    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get("https://arashovplatform.onrender.com/api/v1/student/me", {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => setDataUser(res.data.data))

        axios.get("https://arashovplatform.onrender.com/api/v1/courses/", {
            headers: {
                token: localStorage.getItem('token')
            }
        }).then(res => {
            setCourses(res.data.data)
        })
    }, [])

    return (  
        <div onClick={(e) => {
            if (!e.target.classList.contains("drowdown-item")) {
                setDropdownNow(false)
            }
        }} className="max-w-screen-xl mx-auto min-h-screen">
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
                        <p className="mezzardBold">{dataUser?.email}</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-phone text-xl"></i>
                        <p className="mezzardBold">PHONE :</p>
                        <p className="mezzardBold">{dataUser?.phone}</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">
                        <i className="fa-solid fa-credit-card text-xl"></i>
                        <p className="mezzardBold">TO'LOV :</p>
                        <p className={`mezzardBold ${dataUser?.paymentType === "To'langan" ? "text-green-600" : "text-red-600"}`}>{dataUser?.paymentType}</p>
                        {dataUser?.payment && <a href="./" className="flex justify-center items-center bg-blue-700 py-1 hover:bg-blue-800 px-6 rounded-lg gap-3 mezzardBold ml-4" ><Image src={tg} className="w-6" />Gruppa</a>}
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-between items-center">
                        <h1 className="mezzardBold text-2xl">KURSLAR:</h1>
                        <div>
                            {!dataUser?.payment && <Link className="mezzardBold py-2 px-6 rounded-lg bg-blue-700 py-1 hover:bg-blue-800" href="/checkout">To'lov qilish</Link>}
                        </div>
                    </div>
                    {courses.map(function(item, index) {
                        return <Accordion isPayed={dataUser?.payment} indexOf={index} setDropdown={setDropdown} dropdown={dropdown} dropdownNow={dropdownNow} setDropdownNow={setDropdownNow} data={item} />
                    })}
                </div>
            </main>
        </div>
    );
}
 
export default Me;