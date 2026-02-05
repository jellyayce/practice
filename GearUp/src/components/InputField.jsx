function InputField({email, setEmail, password, setPassword}){
    return(
        <>
            <div className="input-fields">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
        </>
    );
}
export default InputField