import { Outlet, useNavigate } from "react-router-dom";
import HeaderOther from "../../components/Headers/HeaderOther";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";


function Courses() {
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const [nameUser, setNameUser] = useState('');
    useEffect(() => {
        const fetchNameUse = async () => {
            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('email', email)

                if (!error) {
                    setNameUser(data[0]?.name)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchNameUse();
    }, [email])
    if (!nameUser) {
        navigate('/courses/profiles');
    }
    return (
        <>
            <HeaderOther />
            <Outlet />
            <Footer />
        </>
    )
}
export default Courses;