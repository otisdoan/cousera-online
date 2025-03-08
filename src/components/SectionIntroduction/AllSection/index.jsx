import Section1 from "../Section1";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section5 from "../Section5";

function AllSection() {
    return (
        <>
            <Section1 />
            <div className="bg-[#f5f5f5] px-[150px]">
                <Section2 />
            </div>
            <Section3 />
            <div className="bg-[#f5f5f5] px-[250px]">
                <Section4 />
            </div>
            <div className="px-[150px]">
                <Section5 />
            </div>
        </>
    )
}
export default AllSection;
