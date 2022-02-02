import NaveleName from "./NaveleName";

function Navele(){
    return(
        <div>
            <div className="sm:flex">
                <NaveleName name = "saumya singh" className = "font-extrabold text-lg"/>
                <NaveleName name = "home"/>
                <NaveleName name = "about"/>
                <NaveleName name = "projects" />
                <NaveleName name = "contact"/>
            </div>
            
        </div>
    );
}

export default Navele;