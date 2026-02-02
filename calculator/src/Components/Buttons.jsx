function Buttons({label, buttonClick}){
    return(
        <button onClick={() => buttonClick(label)}>
            {label}
        </button>
    );
}
export default Buttons