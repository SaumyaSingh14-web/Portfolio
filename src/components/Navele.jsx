import NaveleName from "./NaveleName";

function Navele(){
    return(
        <div>
            <div className="md:flex">
                <NaveleName name = "home" />
                <NaveleName name = "projects" />
                <NaveleName name = "contact" />

            </div>
            
        </div>
    );
}

export default Navele;