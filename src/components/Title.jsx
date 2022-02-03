function Title(props){
    return(
            <div>
                <div className={`text-orange-100 p-12 font-bold text-3xl text-center ${props.className}`}>{props.title}</div>
                <div className={`text-orange-50 text-md text-center ${props.className}`}>{props.description}</div>
            </div>
            );

}

export default Title; 