import LoginForm from "../../components/Forms/LoginForm";
import image from "../../assets/images/login.png"
function Login() {
    return (
        <>
            <div className="flex my-[50px] px-[150px]">
                <div className="w-1/2 rounded-lg">
                    <img src={image} className="w-full h-full rounded-lg" />
                </div>
                <div className="w-1/2 flex justify-center items-center px-[100px]">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}
export default Login;