import LoginForm from "../../components/Forms/LoginForm";
import image from "../../assets/images/register.png"
import RegisterForm from "../../components/Forms/RegisterForm";
function Register() {
    return (
        <>
            <div className="flex my-[50px] px-[150px]">
                <div className="w-1/2 rounded-lg">
                    <img src={image} className="w-full h-full rounded-lg" />
                </div>
                <div className="w-1/2 flex justify-center items-center px-[100px]">
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}
export default Register;