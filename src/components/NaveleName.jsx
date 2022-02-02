function NaveleName(props){
    return(
        <div>
           <li className={`text-sm max-w-screen-sm p-4 uppercase text-pink-800 ${props.className}`}>{props.name}</li>
        </div>
        
    );
}

export default NaveleName;