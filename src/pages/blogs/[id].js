import { Navbar } from "@/components"
import { Footer } from "@/components"
import { useState, useEffect } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/Logo.png"
import { useRouter } from "next/router"

const Blog = () => {

    const router = useRouter()
    const { id } = router.query

    const [dropdownNow, setDropdownNow] = useState('')
    const [loader, setLoader] = useState(true)

    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        if (id) {
            axios.get(`https://arashovplatform.onrender.com/api/v1/blogs/${id}/`).then(res => {
                setBlogs(res.data.data)
                setLoader(false)
            })
        }
    }, [id])

    return (
        <div className="px-2">
            <header className="wrapper">
                <div className="my-8">
                    <Link href="/" className="w-fit">
                        <Image src={logo} alt="Logo" className="w-40" />
                    </Link>          
                </div>
            </header>

            {!loader ? <main className="max-w-screen-lg mx-auto my-14 bg-gray-200 pb-4 rounded-2xl">
                <div className="pb-3 rounded-2xl mb-5 flex justify-around flex-col items-start gap-5">
                    <Image src={blogs.image} width={980} height={600} className="bg-gray-400 w-full h-80 object-cover rounded-2xl p-2" />
                    <div className="w-full">
                        <div className="px-8 w-6/12">
                            <h1 className="text-gray-800 text-3xl mezzardBold">{blogs.title}</h1>
                            <p className="text-gray-700 text-lg mezzardBold truncate max-w-md">{blogs.shortDescription}</p>
                        </div>
                        <div className="px-8 w-6/12 mt-3">
                            <p className="text-gray-700 text-lg mezzardBold truncate max-w-md">{blogs.description}</p>
                        </div> 
                    </div>
                </div>
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

export default Blog