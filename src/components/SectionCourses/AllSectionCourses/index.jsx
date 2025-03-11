import AllSection from "../../SectionIntroduction/AllSection";
import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";

function AllSectionCourses() {
    return (
        <>
            <div className="px-[150px] bg-[#d7cef3]">
                <Section1 />
            </div>
            <div className="px-[150px] bg-[#f5f5f5]">
                <Section2 />
                <Section3 />
            </div>
            <div className="px-[150px] bg-[#e3edf7]">
                <Section4 />
            </div>
            <div className="px-[150px] bg-[#f5f5f5]">
                <Section4 />
            </div>
            <div className="px-[150px] bg-[#252641] rounded-[20px]">
                <Section5 />
            </div>
            <div className="px-[150px] bg-[#f5f5f5]">
                <Section4 />
            </div>
            <div className="px-[150px] bg-[#e3edf7]">
                <Section4 />
            </div>
        </>
    )
}
export default AllSectionCourses;