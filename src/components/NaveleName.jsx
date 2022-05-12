function NaveleName(props){
    return(
        <div>
            <div><li className={`text-sm max-w-screen-sm p-5 uppercase text-pink-800 hover:underline ${props.className}`}>{props.name}</li></div>
            <div><li className={`text-sm max-w-screen-sm p-5 uppercase text-pink-800 ${props.className}`}>{props.myName}</li></div>
        </div>
    );
}

export default NaveleName;