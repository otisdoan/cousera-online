import Section1 from "../Section1";
import Section2 from "../Section2";

function AllSectionProcessCourses() {
    return (
        <>
            <div className="bg-[#d9cef7] px-[150px]">
                <Section1 />
            </div>
            <div className="bg-[#f7f5fa] px-[150px]">
                <Section2 />
            </div>
        </>
    )
}
export default AllSectionProcessCourses;