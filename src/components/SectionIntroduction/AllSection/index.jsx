import { Navigate } from "react-router-dom";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";
import Section6 from "../Section6";


function AllSection() {
    const access_token = localStorage.getItem('access_token');


    return (
        <>
            {!access_token ? (
                <>
                    <Section1 />
                    <div className="bg-[#f5f5f5] px-[150px]">
                        <Section2 />
                    </div>
                    <Section3 />
                    <div className="bg-[#f5f5f5] px-[150px]" id="cousera">
                        <Section4 />
                    </div>
                    <div className="px-[150px]">
                        <Section5 />
                    </div>
                    <div className="bg-[#f5f5f5] px-[150px]">
                        <Section6 />
                    </div>
                </>
            ) : (
                <Navigate to='/courses' />
            )}
        </>
    );
}

export default AllSection;
