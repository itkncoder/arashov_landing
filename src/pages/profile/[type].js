import axios from "axios"
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

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

    axios.post("https://arashovplatform.onrender.com/api/v1/auth/register/", obj).then(res => alert(true))
  };

  const onLogin = async (data) => {
    const obj = {
      email: data.email,
      password: data.password
    }

    axios.post("https://arashovplatform.onrender.com/api/v1/auth/login/", obj).then(res => console.log(res))
  };

  return (
    <div className="App h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-gray-300 w-fit px-10 relative py-20 rounded-xl">
        {loginOrRegister 
        ? 
        <>
          <form className="flex flex-col items-center" onSubmit={handleSubmit(onRegister)}>
            <div>
              <div className="flex flex-col items-center gap-2">
                <input className="px-6 w-72 py-2 rounded-md focus:ring-2 outline-0 ring-cyan-600" type="email" {...register("email")} name="email" placeholder="Email" />
                <input className="px-6 w-72 py-2 rounded-md focus:ring-2 outline-0 ring-cyan-600" type="tel" {...register("phone")} name="phone" placeholder="Phone" />
                <input className="px-6 w-72 py-2 rounded-md focus:ring-2 outline-0 ring-cyan-600" type="password" {...register("password")} name="password" placeholder="Password" />
              </div>

              <div className="flex justify-end items-center">
                <input className="my-4 bg-cyan-600 px-8 py-2 rounded-lg text-white hover:bg-cyan-700 cursor-pointer" type="submit" value="Jo'natish" />
              </div>

            </div>

            <div className="absolute bottom-3 left-6 cursor-pointer text-gray-700" onClick={() => setLoginOrRegister(prev => !prev)}>
              {loginOrRegister ? "login" : "register"}
            </div>
          </form>
        </>
        :
        <>
          <form className="flex flex-col items-center" onSubmit={handleSubmit(onLogin)}>
            <div>
              <div className="flex flex-col items-center gap-2">
                <input className="px-6 w-72 py-2 rounded-md focus:ring-2 outline-0 ring-cyan-600" type="email" {...register("email")} name="email" placeholder="Email" />
                <input className="px-6 w-72 py-2 rounded-md focus:ring-2 outline-0 ring-cyan-600" type="password" {...register("password")} name="password" placeholder="Password" />
              </div>

              <div className="flex justify-end items-center">
                <input className="my-4 bg-cyan-600 px-8 py-2 rounded-lg text-white hover:bg-cyan-700 cursor-pointer" type="submit" value="Kirish" />
              </div>

            </div>

            <div className="absolute bottom-3 left-6 cursor-pointer text-gray-700" onClick={() => setLoginOrRegister(prev => !prev)}>
              {loginOrRegister ? "login" : "register"}
            </div>
          </form>
        </>}
      </div>
    </div>
  )
}

export default App