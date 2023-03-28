import logo from "@/assets/images/Logo.png"
import Image from "next/image"

const Adminpanel = () => {
    return (  
        <div>
            <aside>
                <Image src={logo} className="w-40" />
                <div>
                    <p>STUDENTS</p>
                    <p>COURSES</p>
                </div>
            </aside>
        </div>
    );
}
 
export default Adminpanel;