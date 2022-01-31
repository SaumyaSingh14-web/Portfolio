function NaveleName(props){
    return(
        <div>
           <li className={`text-sm max-w-screen-lg p-4 hover:underline uppercase text-amber-100 ${props.className}`}>{props.name}</li>

        </div>
    );
}

export default NaveleName;