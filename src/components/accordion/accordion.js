import { useState, useRef } from "react"
import Link from "next/link"

const Accordion = ({setDropdown, dropdown, dropdownNow, setDropdownNow, indexOf, isPayed}) => {

    const dropBlock = useRef(null)

    return (  
        <div>
            <div onClick={() => setDropdownNow(dropdownNow === indexOf ? false : indexOf)} className="w-full my-3 relative cursor-pointer drowdown-item dropdown-top bg-[#00183E] boxshadowed py-3 px-6 rounded-lg active:bg-gray-600 transition-all hover:bg-[#00112C] flex items-center justify-start pl-8 uppercase gap-2">
                <div className="mezzardBold">
                    Select <i className="fa-solid fa-angle-down"></i>
                </div>
                {dropdownNow === indexOf && <div ref={dropBlock} className="absolute shadow-lg shadow-gray-900 w-full z-20 top-12 flex flex-col gap-1 right-0 bg-[#00112C] px-2 py-3 rounded-lg">
                    <p className={`${isPayed ? "" : "cursor-no-drop"} drowdown-item min-w-20 py-1.5 px-5 bg-[#001435] rounded-md hover:ring-2 ring-blue-800 active:ring-4 flex items-center justify-start gap-2`}>Ko'rishlar</p>
                </div>}
            </div>
        </div>
    );
}
 
export default Accordion;