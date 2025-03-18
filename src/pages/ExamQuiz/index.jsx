import { FaBookBookmark } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
function ExamQuiz() {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [time, setTime] = useState(10);
    const question = [
        'A.  Course Details',
        'B. Course Details',
        'C. Course Details',
        'D. Course Details'
    ]
    const handleFinish = () => {
        navigate('/courses/view-courses/practice-quiz/result-quiz');
    }
    const handleContinue = () => {
        if (quantity <= 20) {
            setQuantity(quantity + 1);
        } else {
            setQuantity(20);
        }
    }
    const handleReturn = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
            if (time === 0 && quantity < 20) {
                setQuantity(quantity + 1)
                setTime(10);
            }
            if (quantity === 20 && time === 0) {
                navigate('/courses/view-courses/practice-quiz/result-quiz');
            }
            if (time === -1) {
                setTime(10);
            }
        }, 1000)
    }, [time, quantity, navigate])
    return (
        <>
            <div className="px-[150px] mb-[50px]">
                <div className="bg-[#dfd5f9] flex justify-between p-4 items-center mt-[20px]">
                    <div className="flex gap-x-2 items-center">
                        <FaBookBookmark className="text-[#7a53ed] text-[1.7rem]" />
                        <span>Practice Quiz</span>
                    </div>
                    <div className="flex flex-col items-center gap-y-3">
                        <span className="text-[1.8rem]">{`${quantity}/20`}</span>
                        <span className="text-[0.9rem]">Introduction about XD</span>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <RiSettings5Fill className="text-[#7a53ed] text-[1.4rem] cursor-pointer" />
                        <IoClose className="text-[#7a53ed] text-[2rem] font-bold cursor-pointer" onClick={() => navigate(-1)} />
                    </div>
                </div>
                {quantity > 1 && (
                    <div className="flex items-center justify-center bg-[#9c4df4] w-9 h-8 cursor-pointer mt-[10px]" onClick={handleReturn}><FaArrowLeftLong className="text-white" /></div>
                )}
                <div className="flex justify-center">
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
                </div>
                <div className="flex justify-center mt-[30px]">
                    <div className="flex flex-wrap gap-[50px] justify-center">
                        {question.map((items, index) => (
                            <div key={index} className="rounded-[10px] px-[100px] py-[10px] border-[1px] border-[#49bbbd] w-1/3 flex items-center justify-center hover:text-white hover:bg-[#49bbbd] duration-300 cursor-pointer">
                                <span className="font-bold">{items}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-[30px]">
                    <div className="bg-[#49bbbd] p-2 rounded-full w-[80px] h-[80px] flex items-center justify-center">
                        <div className="rounded-full border-[4px] border-white w-[60px] h-[60px] flex items-center justify-center">
                            <span className="font-bold text-white text-[1.4rem]">{time}</span>
                        </div>
                    </div>
                    {quantity === 20 ? (
                        <Button className="text-white bg-[#49bbbd] py-[20px] px-[30px] font-bold" onClick={handleFinish}>Finish</Button>
                    ) : (
                        <Button className="text-white bg-[#49bbbd] py-[20px] px-[30px] font-bold" onClick={handleContinue}>Continue</Button>
                    )}
                </div>
            </div>
        </>
    )
}
export default ExamQuiz;