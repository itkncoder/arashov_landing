import { Navbar } from "@/components"
import { Footer } from "@/components"
import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/Logo.png"

const Blogs = () => {

    const [dropdownNow, setDropdownNow] = useState('')
    const [loader, setLoader] = useState(true)

    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        axios.get("https://arashovplatform.onrender.com/api/v1/blogs/").then(res => {
            setBlogs(res.data.data)
            setLoader(false)
        })
    }, [])

    return (
        <div onClick={(e) => {
            if (!e.target.classList.contains("drowdown-item")) {
                setDropdownNow(false)
            }
        }} className="px-2">
            <header className="wrapper">
                <div className="my-8">
                    <Link href="/" className="w-fit">
                        <Image src={logo} alt="Logo" className="w-40" />
                    </Link>          
                </div>
            </header>

            {!loader ? <main className="max-w-screen-lg mx-auto my-20">
                <div className="my-2">
                    <h1 className="text-3xl mezzardBold">ARASHOV YANGILIKLAR</h1>
                </div>
                {blogs.map((item, index) =>
                    <div className="boxshadowed3 py-3 px-6 rounded-2xl my-5">
                        <Image src={item.image} width={100} height={150} className="w-full h-80 object-cover rounded-2xl boxshadowed3 my-3 p-2" />
                        <h1 className="text-2xl mezzardBold">{item.title}</h1>
                        <p className="truncate max-w-md">{item.shortDescription}</p>
                        <p className="truncate max-w-md">{item.description}</p>
                        <div>
                            <div className="w-full my-3 relative cursor-pointer drowdown-item dropdown-top bg-[#00183E] boxshadowed py-3 px-6 rounded-lg active:bg-gray-600 transition-all hover:bg-[#00112C] flex items-center justify-start pl-8 uppercase gap-2">
                                <div onClick={() => setDropdownNow(item._id === dropdownNow ? false : item._id)} className="drowdown-item w-full mezzardBold">
                                    # {item.description} to'liq <i className="drowdown-item fa-solid fa-angle-down"></i>
                                </div>
                                {dropdownNow === item._id && <div className="video-div drowdown-item absolute shadow-lg shadow-gray-900 w-full z-20 top-12 flex flex-col gap-1 right-0 bg-[#00112C] px-2 py-3 rounded-lg">
                                    <p className="text-gray-200 drowdown-item">{item.description}</p>
                                </div>}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            :
            <div className="flex h-96 justify-center items-center">
                <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            }

            <div className="my-10">
                <Footer/>
            </div>
        </div>
    )
}

export default Blogs