import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";

function AllSection() {
    return (
        <>
            <Section1 />
            <div className="px-[150px] bg-[#f5f5f5]">
                <Section2 />
                <Section3 />
            </div>
        </>
    )
}
export default AllSection;