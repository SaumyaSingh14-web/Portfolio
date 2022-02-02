function Tagline(props){
    return(
            <div className={`text-orange-100 p-12 font-bold text-3xl mt-12 text-center ${props.className}`}>{props.tagline}</div>
    );

}

export default Tagline; 