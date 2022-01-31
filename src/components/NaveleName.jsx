function NaveleName(props){
    return(
        // <div>
        //     <div className={`text-lg text-green-200 uppercase font-extrabold ${props.className}`}>{props.myName}</div>
        <div>
           <li className={`text-sm max-w-screen-lg p-4 uppercase text-pink-900 ${props.className}`}>{props.name}</li>
        </div>
        //</div>
        
    );
}

export default NaveleName;