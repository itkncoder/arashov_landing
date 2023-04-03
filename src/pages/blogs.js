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
                    <h1 className="text-3xl mezzardBold">ARASHOV BLOG</h1>
                </div>
                {blogs.map((item, index) =>
                    <div className="bg-gray-300 py-3 px-8 rounded-2xl my-5 flex justify-around items-start gap-5">
                        <Image src={item.image} width={550} height={350} className="boxshadowed w-6/12 h-80 object-cover rounded-2xl my-3 p-2" />
                        <div className="w-6/12 my-8">
                            <h1 className="text-gray-800 text-3xl mezzardBold">{item.title}</h1>
                            <p className="text-gray-700 text-lg mezzardBold truncate max-w-md">{item.shortDescription}</p>
                            <div className="mt-6">
                                <Link href={`/blogs/${item._id}`} className="text-gray-100 boxshadowed bg-blue-800 hover:bg-blue-700 mezzardBold py-2 px-8 rounded-xl w-fit truncate max-w-md">To'liq o'qish</Link>
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