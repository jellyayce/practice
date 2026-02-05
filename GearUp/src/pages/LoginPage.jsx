import LoginForm from "../components/LoginForm";
import ImagePanel from "../components/ImagePanel";
function LoginPage(){
    return(
        <>
            <div className="login-page">
                <ImagePanel />
                <LoginForm />
            </div>
        </>
    );
}
export default LoginPage