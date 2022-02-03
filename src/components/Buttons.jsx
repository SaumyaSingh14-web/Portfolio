function Buttons(props){
    return(
        <div>
            {props.btns && <button className={`bg-transparent text-orange-200 border text-sm p-3 mt-1 mb-1 hover:bg-orange-50 hover:text-rose-800 ${props.className}`}>{props.btns}</button>}
        </div>
    );
}

export default Buttons; 