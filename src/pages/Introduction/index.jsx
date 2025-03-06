import { Outlet } from "react-router-dom";
import HeaderIntroduction from "../../components/Headers/HeaderIntroduction";
import Footer from "../../components/Footer";
import Section1 from "../../components/SectionIntroduction/Section1";

function Introduction() {
    return (
        <>
            <HeaderIntroduction />
            <Outlet />
            <Footer />
        </>
    )
}
export default Introduction;