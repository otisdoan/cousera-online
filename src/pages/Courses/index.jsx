import { Outlet } from "react-router-dom";
import HeaderOther from "../../components/Headers/HeaderOther";
import Footer from "../../components/Footer";


function Courses() {
    return (
        <>
            <HeaderOther />
            <Outlet />
            <Footer />
        </>
    )
}
export default Courses;