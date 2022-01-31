import NaveleName from "./NaveleName";

function Navele(){
    return(
        <div>
            <div className="md:flex">
                <NaveleName name = "saumya singh" className = "font-extrabold text-lg justify-self-start"/>
                <NaveleName name = "home"/>
                <NaveleName name = "about"/>
                <NaveleName name = "projects" />
                <NaveleName name = "contact"/>
            </div>
            
        </div>
    );
}

export default Navele;