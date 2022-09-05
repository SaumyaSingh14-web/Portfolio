function NaveleName(props){
    return(
        <div>
            <div><li className={`text-sm max-w-screen-sm p-3 uppercase text-slate-900 flex sm:text-orange-50 hover:underline${props.className}`}>{props.name}</li></div>
            <div><li className={`text-sm max-w-screen-sm ml-3 uppercase text-stone-900 flex sm:text-orange-50 ${props.className}`}>{props.myName}</li></div>
        </div>
    );
}

export default NaveleName;