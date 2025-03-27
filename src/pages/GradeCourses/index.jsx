import { Button } from "antd";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FaUndoAlt } from "react-icons/fa";
function GradeCourses() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-2);
    }
    const handleRetry = () => {
        navigate(-2);
    }
    const handleFeedback = () => {
        navigate('/courses/view-courses/practice-quiz/result-quiz/view-feedback')
    }
    return (
        <>
            <div className="px-[10px] sm:px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] my-[10px] sm:my-[20px]">
                <div className="flex flex-col lg:flex-row gap-y-3 sm:gap-y-4 lg:gap-x-4">
                    <div className="w-full lg:w-1/4 p-2 sm:p-4">
                        <div className="flex items-center justify-center bg-[#9c4df4] w-8 h-8 sm:w-9 sm:h-8 cursor-pointer mb-4 sm:mb-5 lg:mb-7" onClick={handleReturn}>
                            <FaArrowLeftLong className="text-white" />
                        </div>
                        <div>
                            <h2 className="font-bold text-[0.8rem] sm:text-[0.9rem] lg:text-[1.1rem] mb-[10px] sm:mb-[15px] lg:mb-[20px]">Change Simplification</h2>
                            <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4 text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem]">
                                {Array.from({ length: 4 }, (_, i) => (
                                    <Link to='/courses/view-courses/practice-quiz'>
                                        <div key={i} className="flex justify-between items-center bg-[#e2f0ff] p-2 sm:p-3 rounded-md hover:bg-[#49bbbd] hover:text-white duration-500 cursor-pointer">
                                            <div className="flex gap-x-1 sm:gap-x-2 items-center justify-center">
                                                <IoBook />
                                                <span className="opacity-75">Lesson 01 : Introduction about XD</span>
                                            </div>
                                            <span className="opacity-75 hidden lg:block">30 mins</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[0.8rem] sm:text-[0.9rem] lg:text-[1.1rem] mb-[10px] sm:mb-[15px] lg:mb-[20px] mt-[20px] sm:mt-[30px] lg:mt-[40px]">PRACTICE QUIZ</h2>
                            <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4 text-[0.5rem] sm:text-[0.6rem] lg:text-[0.7rem]">
                                {Array.from({ length: 7 }, (_, i) => (
                                    <Link to='/courses/view-courses/practice-quiz'>
                                        <div key={i} className="flex justify-between items-center bg-[#e2f0ff] p-2 sm:p-3 rounded-md hover:bg-[#49bbbd] hover:text-white duration-500 cursor-pointer">
                                            <div className="flex gap-x-1 sm:gap-x-2 items-center">
                                                <IoBook />
                                                <span className="opacity-75">Lesson 01 : Introduction about XD</span>
                                            </div>
                                            <span className="opacity-75 hidden lg:block">30 mins</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/4">
                        <div className="bg-[#dfd6fb] p-3 sm:p-4 lg:p-5">
                            <h1 className="text-[1rem] sm:text-[1.3rem] lg:text-[1.7rem] mb-[5px] sm:mb-[8px] lg:mb-[10px]">Learn about Adobe XD & Prototyping</h1>
                            <div className="flex flex-col lg:flex-row justify-between">
                                <span className="opacity-85 text-[0.6rem] sm:text-[0.8rem] lg:text-[0.9rem]">Practice Quiz</span>
                                <div className="flex items-center opacity-85 text-[0.6rem] sm:text-[0.8rem] lg:text-[0.9rem] gap-x-1">
                                    <LuClock4 />
                                    <span>30 mins</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#f6faff] p-3 sm:p-4 lg:p-7">
                            <div className="bg-[#e2f0ff] p-3 sm:p-4 lg:p-7 rounded-lg">
                                <h1 className="font-bold text-[0.9rem] sm:text-[1.1rem] lg:text-[1.3rem] mb-[10px] sm:mb-[15px] lg:mb-[20px]">Assignment details</h1>
                                <div className="flex flex-col lg:flex-row justify-between items-center">
                                    <div className="flex flex-col gap-y-2 sm:gap-y-3 lg:gap-y-4">
                                        <div className="flex justify-between gap-x-3 sm:gap-x-4 lg:gap-x-12">
                                            <div className="flex flex-col">
                                                <span className="font-bold">Due</span>
                                                <span>March 10, 23:59</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold">Attempts</span>
                                                <span>Unlimited</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex flex-col">
                                                <span className="font-bold">Submitted</span>
                                                <span>Jan 21, 11:29 AM</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="flex items-center gap-x-2 bg-[#49bbbd] text-white py-[8px] sm:py-[10px] lg:py-[18px] px-[10px] sm:px-[15px] lg:px-[30px]" onClick={handleRetry}>
                                        <FaUndoAlt />
                                        <span>Retry</span>
                                    </Button>
                                </div>
                            </div>
                            <div className="bg-[#d4faef] p-3 sm:p-4 lg:p-5 rounded-lg mt-[20px] sm:mt-[30px] lg:mt-[100px]">
                                <h1 className="text-[1rem] sm:text-[1.3rem] lg:text-[1.7rem] font-bold">Your grade</h1>
                                <span className="text-[0.6rem] sm:text-[0.8rem] lg:text-[1rem]">You have not submitted this assignment. We are keeping your highest score.</span>
                                <div className="flex items-center gap-x-2 mt-[5px] sm:mt-[8px] lg:mt-[10px]">
                                    <span className="font-bold text-[1.5rem] sm:text-[2rem] lg:text-[2.7rem] text-[#087051]">90 %</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-end gap-y-2 sm:gap-y-3 lg:gap-x-[50px] mr-[3px] sm:mr-[5px] lg:mr-[30px] mt-[10px] sm:mt-[15px] lg:mt-[40px]">
                                <Button className="bg-[#49bbbd] font-bold text-white px-[10px] sm:px-[15px] lg:px-[35px] py-[8px] sm:py-[10px] lg:py-[18px]">View Submission</Button>
                                <Button className="bg-[#49bbbd] font-bold text-white px-[10px] sm:px-[15px] lg:px-[35px] py-[8px] sm:py-[10px] lg:py-[18px]" onClick={handleFeedback}>See feedback</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GradeCourses;