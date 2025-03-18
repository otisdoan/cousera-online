import { Button } from "antd";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function ViewFeedback() {
    const question = [
        'A.  Course Details',
        'B. Course Details',
        'C. Course Details',
        'D. Course Details'
    ]
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1);
    }
    return (
        <>
            <div className="px-[150px]">
                <div className="bg-[#dfd5f9] flex justify-between items-center p-5 mt-[20px]">
                    <div className="flex items-center gap-x-3">
                        <div className="flex items-center justify-center bg-[#9c4df4] w-9 h-8 cursor-pointer" onClick={handleReturn}><FaArrowLeftLong className="text-white" /></div>
                        <span className="text-[1.4rem]">Practice Quiz</span>
                    </div>
                    <div className="flex flex-col gap-y-4 items-center">
                        <span className="text-[1.5rem]">Your grade: 90%</span>
                        <span>Introduction about XD</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <RiSettings5Fill className="text-[#7a53ed] text-[1.4rem] cursor-pointer" />
                        <IoClose className="text-[#7a53ed] text-[2rem] font-bold cursor-pointer" onClick={() => navigate(-1)} />
                    </div>
                </div>
                <div className="flex justify-end my-[20px] mr-[30px]">
                    <Button className="bg-[#49bbbd] text-white py-[18px] px-[30px]">Finish</Button>
                </div>
                {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="mb-[100px]">
                        <div><h2 className="text-[1.5rem] font-bold">Câu {i + 1}</h2></div>
                        <div className="flex justify-center relative">
                            <div className="rounded-[10px] border-[1px] border-[#49bbbd] p-7 shadow-lg flex flex-col gap-y-4 w-[60%] mt-[10px]">
                                <h2 className="font-bold text-center">Course Details</h2>
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis consectetur adipiscing elit.
                                </p>
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className="rounded-[10px] border-[1px] border-[#49bbbd] w-[80px] h-[30px] flex items-center justify-center absolute top-0 right-[13rem] z-10 bg-white">
                                <span className="font-bold text-[0.8rem]">1/1 Point</span>
                            </div>
                        </div>
                        <div className="flex mt-[100px]">
                            <div className="flex flex-wrap gap-[50px] justify-between">
                                {question.map((items, index) => (
                                    <div key={index} className="rounded-[10px] px-[100px] py-[10px] border-[1px] border-[#49bbbd] w-1/3 flex items-center justify-center hover:text-white hover:bg-[#49bbbd] duration-300 cursor-pointer">
                                        <span className="font-bold">{items}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ViewFeedback;