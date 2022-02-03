function Title(props){
    return(
        <div>
            <div className={`text-orange-200 p-12 font-bold text-3xl ${props.className}`}>{props.title}</div>
            <div className={`text-orange-50 text-md text-center mx-3 my-8 ${props.className}`}>{props.description}</div>
        </div>
        );

}

export default Title; 