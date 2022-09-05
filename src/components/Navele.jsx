import NaveleName from "./NaveleName";
import {FaBars} from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';
import useState from "react";

function Navele(){
    const [toggle, setToggle] = useState(false);

    return(
        <div className="md:flex md:justify-between">
            <div className="flex justify-start">
                <NaveleName myName = "saumya singh" className = "font-extrabold text-lg"/>
            </div>

            <div className="flex md:hidden absolute right-8 top-7 cursor-pointer">
                <button onClick={() => setToggle(!toggle)}>{(toggle) ? <GrClose/> : (<FaBars/>)}</button>
            </div>
 
            <div className="cursor-pointer md:flex md:mt-3">
                <NaveleName name = "home"/>
                <NaveleName name = "about"/>
                <NaveleName name = "projects" />
                <NaveleName name = "contact"/>
            </div>

        </div>
    );
}

export default Navele;