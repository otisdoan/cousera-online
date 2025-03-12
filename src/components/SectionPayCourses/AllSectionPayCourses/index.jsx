import Section1 from "../Section1";
import Section2 from "../Section2";

function AllSectionPayCourses() {
    return (
        <>
            <div className="px-[150px] bg-[#d7cef3]">
                <Section1 />
            </div>
            <div className="px-[150px] bg-[#f5f5f5]">
                <Section2 />
            </div>
        </>
    )
}
export default AllSectionPayCourses;