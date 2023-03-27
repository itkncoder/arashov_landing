import axios from "axios"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/images/Logo.png"

function App() {    
  const { register, handleSubmit } = useForm()

  const router = useRouter()
  const { type } = router.query

  const [loginOrRegister, setLoginOrRegister] = useState('')

  useEffect(() => {
    if (type == "register") {
      setLoginOrRegister(true)
    } 
    else if(type == "login") {
      setLoginOrRegister(false)
    } 
  }, [router])

  const onRegister = async (data) => {
    const obj = {
      email: data.email,
      phone: data.phone,
      password: data.password
    }

    axios.post("https://arashovplatform.onrender.com/api/v1/auth/register/", obj).then(res => alert("auth"))
  };

  const onLogin = async (data) => {
    const obj = {
      email: data.email,
      password: data.password
    }

    axios.post("https://arashovplatform.onrender.com/api/v1/auth/login/", obj).then(res => console.log(res))
  };

  const inputDesign = "px-6 w-full py-2 rounded-md bg-gray-100 focus:ring-2 outline-0 ring-cyan-700 shadow"

  const submitDesign = "my-4 bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-2 rounded-lg text-white hover:to-blue-600 hover:from-cyan-600 transition-all duration-300 hover:shadow cursor-pointer"

  return (
    <div className="App h-screen bg-gradient-to-r from-cyan-700 to-blue-800 flex flex-col items-center justify-center">
      <div className="bg-[#c8c8c8] w-full max-w-sm 2xl:max-w-md h-5/6 px-6 relative pb-32 rounded-lg shadow-2xl">
        <div className="flex flex-col items-center mt-10 gap-5">
          <Link href="/">
            <Image src={logo} className="w-40" />
          </Link>
          <p className="uppercase text-gray-700 mezzardBold text-2xl text-center mb-8">{loginOrRegister ? "Ro'yhatdan o'tish" : "Tizimga kirish"}</p>
        </div>
        {loginOrRegister 
        ? 
        <>
          <form className="flex flex-col items-center" onSubmit={handleSubmit(onRegister)}>
            <div className="w-full">
              <div className="flex flex-col items-center gap-2">
                <input className={inputDesign} type="email" {...register("email")} name="email" placeholder="Email" />
                <input className={inputDesign} type="tel" {...register("phone")} name="phone" placeholder="Phone" />
                <input className={inputDesign} type="password" {...register("password")} name="password" placeholder="Password" />
              </div>

              <div className="flex justify-end items-center">
                <input className={submitDesign} type="submit" value="Jo'natish" />
              </div>

            </div>
          </form>
        </>
        :
        <>
          <form className="flex flex-col items-center" onSubmit={handleSubmit(onLogin)}>
            <div className="w-full">
              <div className="flex flex-col items-center gap-2">
                <input className={inputDesign} type="email" {...register("email")} name="email" placeholder="Email" />
                <input className={inputDesign} type="password" {...register("password")} name="password" placeholder="Password" />
              </div>

              <div className="flex justify-end items-center">
                <input className={submitDesign} type="submit" value="Kirish" />
              </div>

            </div>
          </form>
        </>}
        <div className="absolute bottom-3 left-6 cursor-pointer text-sm text-gray-200 bg-cyan-600 px-6 rounded-xl py-0.5 hover:bg-cyan-700 mezzardBold" onClick={() => setLoginOrRegister(prev => !prev)}>
          {loginOrRegister ? "Tizimga kirish" : "Ro'yhatdan o'tish"}
        </div>
      </div>
    </div>
  )
}

export default App