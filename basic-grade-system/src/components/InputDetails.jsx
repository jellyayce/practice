function InputDetails({label, value, onChange}){
    return(
        <>
            <h5>{label}</h5>
            <input 
                type="text"
                value={value}
                onChange={onChange}
            />
        </>
    );
}
export default InputDetails