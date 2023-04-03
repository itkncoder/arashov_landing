import Link from "next/link"

const Accordion = ({setDropdown, dropdown, dropdownNow, setDropdownNow, indexOf, isPayed, data}) => {

    return (  
        <div>
            <div className="w-full my-3 relative cursor-pointer drowdown-item dropdown-top bg-[#00183E] boxshadowed py-3 px-6 rounded-lg active:bg-gray-600 transition-all hover:bg-[#00112C] flex items-center justify-start pl-8 uppercase gap-2">
                <div onClick={() => setDropdownNow(dropdownNow === indexOf ? false : indexOf)} className="drowdown-item w-full mezzardBold">
                    {data.videoTitle} <i className="drowdown-item fa-solid fa-angle-down"></i>
                </div>
                {dropdownNow === indexOf && <div className="drowdown-item absolute shadow-lg shadow-gray-900 w-full z-20 top-12 flex flex-col gap-1 right-0 bg-[#00112C] px-2 py-3 rounded-lg">
                    <video className={`${isPayed ? "drowdown-item" : "drowdown-item cursor-no-drop"}`} src={data.videoLink} controls></video>
                </div>}
            </div>
        </div>
    );
}
 
export default Accordion;