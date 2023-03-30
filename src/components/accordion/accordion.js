import { useState, useRef } from "react"

const Accordion = ({setDropdown, dropdown}) => {

    const dropBlock = useRef(null)

    return (  
        <div>
            <div onClick={() => setDropdown(prev => !prev)} className="w-full my-3 relative cursor-pointer drowdown-item dropdown-top bg-[#00183E] boxshadowed py-3 px-6 rounded-lg active:bg-gray-600 transition-all hover:bg-[#000C1E] flex items-center justify-start pl-8 mezzardBold uppercase gap-2">Select <i className="fa-solid fa-angle-down"></i>
                {dropdown && <div ref={dropBlock} className="absolute w-full z-20 top-12 flex flex-col gap-1 right-0 bg-gray-700 px-2 py-3 rounded-lg">
                    <p className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i className="fa-solid fa-eye"></i> Ko'rishlar</p>
                    <p className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i className="fa-solid fa-thumbs-up"></i> Reyting</p>
                </div>}
            </div>
        </div>
    );
}
 
export default Accordion;