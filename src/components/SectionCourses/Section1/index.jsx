import { Button } from "antd";
import section1C from '../../../assets/images/section1C.png';
function Section1() {
    return (
        <>
            <div className="flex justify-between pt-[40px] pb-[50px]" >
                <div className="w-1/2 flex flex-col justify-between">
                    <p className="font-semibold mb-[30px] text-[1.5rem]">By Themadbrains in <span className="text-[#49bbbd]">inspiration</span></p>
                    <p className="font-bold text-[2.4rem] text-white mb-[30px]">
                        <span className="text-[#f48c06]">Studying</span> Online is now
                        <br />
                        much easier
                    </p>
                    <p className="font-medium mb-[70px] text-[1.2rem]">
                        ITEL is an interesting platform that will teach you in more an
                        <br />
                        interactive way
                    </p>
                    <Button className="bg-[#49bbbd] text-white font-bold w-[160px] p-5 rounded-[10px] animate-pulse">Start learning now</Button>
                </div>
                <div className="w-1/2">
                    <img src={section1C} className="w-full h-full"/>
                </div>
            </div>
        </>
    )
}
export default Section1;