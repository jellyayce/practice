import { useState } from "react";
import InputField from "./InputField";

function LoginForm(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <div className="login-card">
                <div className="login-header">
                    <img src="gearuplogo.png" alt="GearUp logo"/>
                </div>
                <div className="login-form">
                    <InputField
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    />
                </div>
                <button className="login-button">
                    LOG IN
                </button>
                <p>Don’t have an account yet? <span>Sign Up</span></p>
            </div>
        </>
    );
}
export default LoginForm