import axios from "axios"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import Link from "next/link"
import { useRouter } from "next/router"

const Blogs = () => {
    const { register, handleSubmit } = useForm();

    const router = useRouter()

    const [inputs, setInputs] = useState({
        image: "",
        title: "",
        shortDescription: "",
        description: "",
    })

    const [ viewOrPost, setViewOrPost ] = useState(true)
    const [ postOrPut, setPostOrPut ] = useState(true)
    const [ changeId, setChangeId ] = useState('')

    const [ blogs, setBlogs ] = useState([])
    
    useEffect(() => {
        axios.get("https://arashovplatform.onrender.com/api/v1/blogs/").then(res => {
            setBlogs(res.data.data)
        })
    }, [])

    const onSubmitBlog = async (data) => {
        const obj = {
            image: inputs.image,
            title: inputs.title,
            shortDescription: inputs.shortDescription,
            description: inputs.description,
        }

        if (postOrPut) {
            await axios.post(`https://arashovplatform.onrender.com/api/v1/blogs/add`, obj).then(() => {
                setViewOrPost(true)
                setInputs([])
                axios.get("https://arashovplatform.onrender.com/api/v1/blogs/").then(res => {
                    setBlogs(res.data.data)
                })
            })
        } else {
            await axios.patch(`https://arashovplatform.onrender.com/api/v1/blogs/${changeId}`, obj).then(() => {
            setInputs([])
            setChangeId('')
            setViewOrPost(true)
            axios.get("https://arashovplatform.onrender.com/api/v1/blogs/").then(res => {
                setBlogs(res.data.data)
            })
        })
        }
    };

    const deleteBlog = (id) => {
        axios.delete(`https://arashovplatform.onrender.com/api/v1/blogs/${id}`).then(() => {
            axios.get("https://arashovplatform.onrender.com/api/v1/blogs/").then(res => {
                setBlogs(res.data.data)
            })
        })
    }

    const putBlog = (id) => {

        setViewOrPost(false)
        setPostOrPut(false)
        setChangeId(id)

        axios.get(`https://arashovplatform.onrender.com/api/v1/blogs/${id}`).then(res => {
            setInputs(res.data.data)
        })

    }

    return (
        <div className="absolute w-full h-full bg-[#151A20] z-50 top-0 right-0 flex items-start justify-center">

            <aside className="px-6 h-full w-60 flex flex-col items-center py-6 bg-gray-800">
                <div className="flex flex-col items-start gap-2 w-full">

                    <Link className="my-6 rounded-lg bg-yellow-500 px-8 hover:bg-yellow-600 py-2" href="/admin/arashov/dashboard">Ortga</Link>

                    <p onClick={() => setViewOrPost(true)} className={ `${ viewOrPost ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> VIEW</p>
                    <p onClick={() => {
                        setViewOrPost(false)
                        setPostOrPut(true)
                    }} className={ `${ !viewOrPost ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> ADD</p>
                </div>
            </aside>

            <div className="w-full py-4">
                <div className="flex flex-col items-center gap-2">
                    {!viewOrPost ? <form onSubmit={handleSubmit(onSubmitBlog)} className="relative flex w-9/12 justify-center my-2 items-start bg-gray-800 px-4 py-5 rounded-xl w-fit items-start gap-2">

                        <p className="flex justify-center absolute top-3 left-4 items-center mezzardBold text-sm">{postOrPut ? "-POST-" : "-PUT-"}</p>

                        <div className="grid grid-row-12 w-full gap-5 rounded-2xl px-10">

                            <h1 className="text-3xl">ADD BLOG</h1>

                            <div className="w-full">
                                <h1 className="text-xl">Image</h1>
                                <input onInput={e => setInputs({...inputs, image: e.target.value})} value={inputs.image} {...register("image")} required className="text-gray-100 outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="Image URL..." name="image" id="" />
                            </div>
                            
                            <div className="w-full">
                                <h1 className="text-xl">Title</h1>
                                <input onInput={e => setInputs({...inputs, title: e.target.value})} value={inputs.title}  {...register("title")} required className="text-gray-100 outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="title..." name="title" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">Description</h1>
                                <input onInput={e => setInputs({...inputs, description: e.target.value})} value={inputs.description}  {...register("description")} required className="text-gray-100 outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="description..." name="description" id="" />
                            </div>

                            <div className="w-full">
                                <h1 className="text-xl">ShortDescription</h1>
                                <input onInput={e => setInputs({...inputs, shortDescription: e.target.value})} value={inputs.shortDescription} {...register("shortDescription")} required className="text-gray-100 outline-0 border-0 bg-gray-700 rounded-md px-5 py-2 w-full focus:ring-2 ring-gray-600" type="text" placeholder="shortDescription..." name="shortDescription" id="" />
                            </div>

                            <div className="flex justify-end items-center mt-5">
                                <input className="bg-yellow-500 hover:bg-yellow-600 mr-2 px-10 cursor-pointer py-2.5 rounded-lg" type="submit" value="Submit" />
                            </div>

                        </div>

                    </form>
                    :
                    <table className="flex flex-col items-start w-full px-4">
                        <thead className="w-full">
                            <tr className="flex justify-between items-center w-full gap-8 bg-gray-700 px-6 py-2">
                                <th className="w-3/12 text-start">Title</th>
                                <th className="w-2/12 text-start">ShortDescrtiption</th>
                                <th className="w-3/12 text-start">Descrtiption</th>
                                <th className="w-2/12 text-start flex items-center justify-end">Tools</th>
                            </tr>
                        </thead>
                        <tbody className="w-full flex flex-col max-h-full overflow-y-auto">
                            {
                                blogs.map((i) => 
                                    <tr key={i._id} className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                        <td className="text-sm w-3/12 truncate">{i.title}</td>
                                        <td className="text-sm w-2/12 truncate">{i.shortDescription}</td>
                                        <td className="text-sm w-3/12 truncate">{i.description}</td>
                                        <div className="flex items-center w-2/12 justify-end gap-4">
                                            <p onClick={() => {
                                                putBlog(i._id)
                                            }} className="cursor-pointer flex items-center justify-center gap-1 bg-yellow-500 px-2 py-0.5 text-sm rounded-md">EDIT
                                                <i className="bg-yellow-600 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                            </p>
                                            <i onClick={() => deleteBlog(i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                        </div>  
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs