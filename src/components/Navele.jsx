import NaveleName from "./NaveleName";
import {FaBars, FaItems} from 'react-icons/fa';

function Navele(){
    return(
        <div>
            <div className="sm:flex">
                <NaveleName myName = "saumya singh" className = "font-extrabold text-lg"/>
            </div>
            <div>
                <NaveleName name = "home"/>
                <NaveleName name = "about"/>
                <NaveleName name = "projects" />
                <NaveleName name = "contact"/>
            </div>
            <div className="hamburger">
                <FaBars/>
            </div>
        </div>
    );
}

export default Navele;