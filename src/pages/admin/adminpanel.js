import logo from "@/assets/images/Logo.png"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Adminpanel = () => {

    const [ tab, setTabs ] = useState(true)

    const category = [
        {
        "_id": "64077033a7c03bf3bad721f8",
        "title": "Men qizarib ketyabman | Qirmizi qizaloq",
        "description": "O‘ziga ishongan 13 yoshli Mey Li tirishqoq va itoatkor onaning qizi bo‘lish va o‘smirlik davridagi tartibsizliklarga dosh berish o‘rtasida siqilib qolgan. Va uning qiziqishlari, munosabatlari va o'smirlikdagi o'zgarishlar allaqachon etarli bo'lib tuyuladi, lekin yo'q - u juda xavotirlanganda (bu deyarli har doim o'spirin bilan sodir bo'ladi), u bir zumda ulkan qizil pandaga aylanadi.",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://ice-eu-89817.icedrive.io/download?p=QccO59Fal3ZxkR_keqUcgyGLYp6qAltIgQYWVICermk.165XDejMo2E.GKZUIay1Z6MMQBo2l58Cq4lAYdTtqSwVb.96_yNFQd4d.PKCs0fGCIazI407mYNjo00P.z1Xpq30TrsVBFMCUkQA30MivcV9OkTf9yLZAv2SnCnhtUnm9pfTzXqRRKmtc13tindiS2_L7ciOpeeOg6HEtJjdtiHONIAhqUIC7lZZLxrQQL3d2GdYQR_pXdbGzHfepa52",
        "category": {
        "_id": "63e4c448fbc11b6b68eb49bd",
        "name": "Multfilmlar",
        "createdAt": "2023-02-09T10:00:40.009Z",
        "updatedAt": "2023-02-09T10:00:40.009Z",
        "__v": 0
        },
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/4486362/85e48936-de05-4b06-af71-db09f3e76364/1920x",
        "year": 2022,
        "genres": "Komediya",
        "likes": 19,
        "trailer": "https://youtu.be/nkXi4mN4nVk",
        "age": 6,
        "viewCount": 87,
        "duration": "100",
        "createdAt": "2023-03-07T17:11:15.331Z",
        "updatedAt": "2023-03-23T19:21:51.549Z",
        "__v": 0
        },
        {
        "_id": "64023b1c935c6d9147a9cfa2",
        "title": "Kokoning siri",
        "description": "\"Koko siri\" - bizni Meksikaga olib boradigan yangi Pixar multfilmi. Bola Migel musiqachi bo'lishni orzu qiladi, lekin bitta narsa bor: ularning uyida musiqa taqiqlangan. Ushbu tabuning sabablarini tushunish uchun Migel o'liklar mamlakatiga borishi kerak, u erda u ko'plab \"oilaviy shkafda skeletlari\" topadi.",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://ice-eu-108052.icedrive.io/download?p=QccO59Fal3ZxkR_keqUcgyGLYp6qAltIgQYWVICermno5SOUOdxUzhIajLW_.qFIZ6MMQBo2l58Cq4lAYdTtqSwVb.96_yNFQd4d.PKCs0dOPL72yO_6icfHncQNc..DnVL8U8GpCrL.9Rsvxh3dQQGwaUTQ.b36r7.V.T668kbm9pfTzXqRRKmtc13tindiuCmVDQywJ8V3vogTwQmEd.ewsfCEKMMrJQ8vfWZh.fw-",
        "category": {
        "_id": "63e4c448fbc11b6b68eb49bd",
        "name": "Multfilmlar",
        "createdAt": "2023-02-09T10:00:40.009Z",
        "updatedAt": "2023-02-09T10:00:40.009Z",
        "__v": 0
        },
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/c1001292-78a7-4d8e-ba60-79475d10165c/1920x",
        "year": 2017,
        "genres": "Komediya",
        "likes": 15,
        "trailer": "https://youtu.be/KjDYG59qB_8",
        "age": 6,
        "viewCount": 91,
        "duration": "145",
        "createdAt": "2023-03-03T18:23:24.153Z",
        "updatedAt": "2023-03-21T15:26:45.608Z",
        "__v": 0
        },
        {
        "_id": "64016bd7f0d78eb0b217d653",
        "title": "Muzlik davri 6: Bakning sarguzashtlari",
        "description": "Muzlik davri 6: Yovvoyi Bakning sarguzashtlari Uzbek tilida multfilm 2022 O'zbek tilida",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://icecube-eu-407.icedrive.io/download?p=QccO59Fal3ZxkR_keqUcg1CaJAtzmFT1Eg_EQHkyxlMn4N0kJb1xu8rbGWp5AD8PZ6MMQBo2l58Cq4lAYdTtqSwVb.96_yNFQd4d.PKCs0fN9WgFlc6pBZ65UcWIkHLaZeawt4oE1K9oxc_brYTaeSHtojcyI608OhMpEiOZT5jm9pfTzXqRRKmtc13tindicPy5T3dhQ2_6j6cZakdTQECr5R5QjTFxgCIZzh_GQyfxBgRTAM6FcVSBAuJiPK454Xb6z4GqQwv_Nsp3SkVGtg--",
        "category": {
        "_id": "63e4c448fbc11b6b68eb49bd",
        "name": "Multfilmlar",
        "createdAt": "2023-02-09T10:00:40.009Z",
        "updatedAt": "2023-02-09T10:00:40.009Z",
        "__v": 0
        },
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/e517370f-d0e2-4fcd-b8b0-d664c9b5d46d/1920x",
        "year": 2022,
        "genres": "Sarguzasht",
        "likes": 30,
        "trailer": "https://www.youtube.com/watch?v=0U0L4uT0btQ",
        "age": 6,
        "viewCount": 161,
        "duration": "82",
        "createdAt": "2023-03-03T03:39:03.102Z",
        "updatedAt": "2023-03-28T01:30:07.188Z",
        "__v": 0
        },
        {
        "_id": "63f7eb3f70d9f465f092a35f",
        "title": "Uch bahodir va Tulpor Yuli: Taxt uchun kurash",
        "description": "Har doimgidek, Yuliy ot tarixga kirdi. Va shu bilan birga u shahzodaga yordam berdi - ular tasodifan jasadlarni almashtirdilar, albatta, eski tanish - Baba Yaga va ozgina jodugarlik yordamisiz. Endi Yuliy saroyda o'tiradi va Kievni obodonlashtiradi, shahzoda esa dalani haydaydi. Bu taxt o'yinlari. Ammo bu uzoq davom eta olmaydi, vatan xavf ostida! Va har doimgidek, uchta qahramon biznesga kirishadi.",
        "language": "UZ",
        "country": "Rossiya",
        "video": "https://icecube-eu-304.icedrive.io/download?p=QccO59Fal3ZxkR_keqUcgyGLYp6qAltIgQYWVICermlT0lplddal0AfduPMUucJP6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9SonsVn16gJ_GONfQ04OoBbJ4GhJ1lmXM7zxxdBZJiPTxf_v_mml1nUrxxIzjLnd6Xm9pfTzXqRRKmtc13tindi4SJx968Z1HihOy9_IrAgcFrDdAXlYJkSSb9LgPF_JW.LZDOHOblIcU1tHQEvrvGcLeqamj56CWOmsozLHcLJS.ewsfCEKMMrJQ8vfWZh.fw-",
        "category": {
        "_id": "63e4c448fbc11b6b68eb49bd",
        "name": "Multfilmlar",
        "createdAt": "2023-02-09T10:00:40.009Z",
        "updatedAt": "2023-02-09T10:00:40.009Z",
        "__v": 0
        },
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/84588772-8794-40dd-8897-04ea3482c355/300x450",
        "year": 2022,
        "genres": "Sarguzasht",
        "likes": 21,
        "trailer": "https://youtu.be/tz0QZBcTqBI",
        "age": 6,
        "viewCount": 62,
        "duration": "75",
        "createdAt": "2023-02-23T22:39:59.537Z",
        "updatedAt": "2023-03-24T08:30:15.084Z",
        "__v": 0
        },
        {
        "_id": "63f7b44b024f7d29417ddde1",
        "title": "Etik kiygan mushuk 2: So'nggi istak",
        "description": "Puss in Boots o'zining to'qqiz hayotidan sakkiztasini o'tkazdi va endi afsonaviy Oxirgi tilakni topish va hayotini tiklash uchun yangi sarguzashtga kirishmoqda.",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://icecube-eu-406.icedrive.io/download?p=QccO59Fal3ZxkR_keqUcgyGLYp6qAltIgQYWVICermnPOl7ud0CJjNdpykKfGXUo6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9Rah5DwPe53CwDfl.s2f9dOVsHHomw7jygNhhN9Tx5lEsWztIMsJYeCZ0OsYtB3wdLm9pfTzXqRRKmtc13tindilHNUCMD7yTRIKSvx08YA1W1xuVz6uP1nEKf0xps8eFOUKsAbBPYKIJH76s1pvF46",
        "category": {
        "_id": "63e4c448fbc11b6b68eb49bd",
        "name": "Multfilmlar",
        "createdAt": "2023-02-09T10:00:40.009Z",
        "updatedAt": "2023-02-09T10:00:40.009Z",
        "__v": 0
        },
        "poster": "https://avatars.mds.yandex.net/get-entity_search/2369898/603513572/S134x201_2x",
        "year": 2022,
        "genres": "Komediya",
        "likes": 20,
        "trailer": "https://www.youtube.com/watch?v=uIKVYcEBVLU",
        "age": 6,
        "viewCount": 96,
        "duration": "102",
        "createdAt": "2023-02-23T18:45:31.989Z",
        "updatedAt": "2023-03-26T19:22:41.023Z",
        "__v": 0
        },
        {
        "_id": "63f76f3797da2546c1fa76c1",
        "title": "Omad Multfilm ",
        "description": "Mehribonlik uyi bitiruvchisi Sem hamma narsadan ko'ra dugonasi kichik Hazelning omadli bo'lishini xohlaydi va qiz nihoyat oila topdi. Semning o'zi unchalik omadli emas, lekin bir kuni u adashgan mushuk bilan muomala qiladi, omadli tanga topadi va shu paydivan boshlab u hamma narsada omadli bo'lishni boshlaydi. Tangani Hazelga berishga qaror qilib, qiz tasodifan uni hojatxonaga tashlaydi va u yana mushukka duch kelganida, bu oddiy hayvon emasligini tushunadi. Mushukdan yangi tanga so‘ramoqchi bo‘lgan Sem uni ta’qib qila boshlaydi va sehrli Fortune yurtiga tushib qoladi.",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://icecube-eu-307.icedrive.io/download?p=QccO59Fal3ZxkR_keqUcgyGLYp6qAltIgQYWVICermkt6GzGHwKNlCFv_y9h.84A6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9TjzBOk_jqZAsjcStQnbWZ.QU4JeaY0sZU2MHM2eNdd8tQYWMpw1P.P_8Jue.zJEtfm9pfTzXqRRKmtc13tindiYyEQ1ogUCnhEIq5Lup5ifqrkp_Uz0K0SO5QL7v36RhE-",
        "category": {
        "_id": "63e4c448fbc11b6b68eb49bd",
        "name": "Multfilmlar",
        "createdAt": "2023-02-09T10:00:40.009Z",
        "updatedAt": "2023-02-09T10:00:40.009Z",
        "__v": 0
        },
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/baebd06c-ac30-4ff9-b6ca-79d3bb1c57d1/300x450",
        "year": 2022,
        "genres": "Komediya",
        "likes": 13,
        "trailer": "https://www.youtube.com/watch?v=xSG5UX0EQVg",
        "age": 6,
        "viewCount": 71,
        "duration": "105",
        "createdAt": "2023-02-23T13:50:47.987Z",
        "updatedAt": "2023-03-23T19:21:43.352Z",
        "__v": 0
        }
    ]

    return (  
        <div className="mx-auto absolute top-0 right-0 z-50 w-full h-full flex items-start justify-start h-screen max-h-screen">
            <aside className="px-6 h-full w-72 flex flex-col items-center py-6 bg-gray-800">
                <Link href="/">
                    <Image src={logo} alt="logo" className="w-40 cursor-pointer hover:-rotate-2 transition-all" />
                </Link>
                <div className="mt-6 flex flex-col items-start gap-2 w-full">
                    <p onClick={() => setTabs(true)} className={ `${ tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-bars-progress"></i> CATEGORYES</p>
                    <p onClick={() => setTabs(false)} className={ `${ !tab ? "bg-gray-700 ring-2" : "bg-gray-600" } flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-film"></i> MOVIES</p>
                    
                    <div className="mt-2 w-full flex flex-col gap-2">
                        <Link href={`./add/category`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Add category</Link>
                        <Link href={`./add/films`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Add movie</Link>

                        <Link href={`./slider`} className={ `bg-gray-600 flex items-center justify-start gap-4 font-semibold pl-5 hover:ring-2 ring-gray-600 hover:bg-gray-800 cursor-pointer w-full rounded-sm py-2`}><i className="fa-solid fa-add"></i>Add slider</Link>
                    </div>

                </div>
            </aside>
            <div className="px-4 py-6 h-full w-full bg-[#151A20] max-h-screen overflow-y-auto">
                <div className="py-4 flex items-center justify-between">
                    <p className="text-3xl font-semibold">{tab ? "Category" : "Movie"}</p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="w-full">
                        <div className="flex justify-between items-center w-full gap-3 bg-gray-700 px-6 py-2">
                            <div className="w-3/12 text-start">Name</div>
                            {!tab ? <div className="w-2/12 text-start">Genres</div> : ""}
                            {!tab ? <div className="w-2/12 text-start">Category</div> : ""}
                            {!tab ? <div className="w-1/12 text-start">Views</div> : ""}
                            {!tab ? <div className="w-1/12 text-start">Likes</div> : ""}
                            <div className="w-2/12 text-end">Tools</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col max-h-full overflow-y-auto">
                        {   !tab ?
                            category.map((i) => 
                                <div key={i._id} className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                    <div className="text-sm w-3/12 truncate">{i.title}</div>
                                    <div className="text-sm w-2/12 truncate">{i.genres}</div>
                                    <div className="text-sm w-2/12 truncate">{i.category?.name}</div>
                                    <div className="text-sm w-1/12 truncate">{i.viewCount}</div>
                                    <div className="text-sm w-1/12 truncate">{i.likes}</div>
                                    <div className="flex items-center w-2/12 justify-end gap-4 w-4/12">
                                        <Link href={`./add/films?id=${i._id}`} className="cursor-pointer flex items-center justify-center gap-1 bg-yellow-500 px-2 py-0.5 text-sm rounded-md">EDIT
                                            <i className="bg-yellow-600 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-edit"></i>
                                        </Link>
                                        <i onClick={() => deleteing("films", i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                    </div>
                                </div>
                            )
                            :
                            category.map(i => <div key={i._id} className="flex justify-between items-center border border-gray-600 w-full gap-3 bg-gray-800 px-6 py-2 hover:bg-gray-700">
                                <div className="text-sm w-4/12 truncate">{i.name}</div>
                                <div className="flex items-center w-4/12 justify-end gap-4 w-4/12">
                                    <i onClick={() => deleteing("category", i._id)} className="bg-rose-500 w-8 flex items-center justify-center rounded-md h-8 cursor-pointer hover:scale-105 fa-solid fa-remove"></i>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Adminpanel;