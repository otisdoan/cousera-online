import { Button } from "antd";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function PracticeQuiz() {
    const navigate = useNavigate();
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const handleReturn = () => {
        navigate(-1);
    }

    const handleStart = () => {
        navigate('/courses/view-courses/practice-quiz/exam-quiz')
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[150px] my-5">
            {/* Mobile Sidebar Toggle */}
            <div className="md:hidden flex justify-end mb-4">
                <Button 
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                    className="text-lg"
                >
                    {mobileSidebarOpen ? '✕' : '☰'}
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar - Responsive Visibility */}
                <div className={`
                    ${mobileSidebarOpen ? 'block' : 'hidden'} 
                    md:block md:w-1/4 
                    transition-all duration-300 ease-in-out
                `}>
                    <div className="flex items-center justify-center bg-[#9c4df4] w-9 h-8 cursor-pointer mb-7" onClick={handleReturn}>
                        <FaArrowLeftLong className="text-white" />
                    </div>

                    {/* Change Simplification Section */}
                    <div className="mb-8">
                        <h2 className="font-bold text-lg mb-5">Change Simplification</h2>
                        <div className="space-y-4 text-sm">
                            {Array.from({ length: 4 }, (_, i) => (
                                <Link 
                                    key={i} 
                                    to='/courses/view-courses/practice-quiz'
                                    className="block"
                                >
                                    <div className="flex justify-between items-center bg-[#e2f0ff] p-3 rounded-md hover:bg-[#49bbbd] hover:text-white transition-colors duration-500">
                                        <div className="flex items-center gap-x-2">
                                            <IoBook />
                                            <span className="opacity-75">Lesson 01 : Introduction about XD</span>
                                        </div>
                                        <span className="opacity-75">30 mins</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Practice Quiz Section */}
                    <div>
                        <h2 className="font-bold text-lg mb-5">PRACTICE QUIZ</h2>
                        <div className="space-y-4 text-sm">
                            {Array.from({ length: 7 }, (_, i) => (
                                <Link 
                                    key={i} 
                                    to='/courses/view-courses/practice-quiz'
                                    className="block"
                                >
                                    <div className="flex justify-between items-center bg-[#e2f0ff] p-3 rounded-md hover:bg-[#49bbbd] hover:text-white transition-colors duration-500">
                                        <div className="flex items-center gap-x-2">
                                            <IoBook />
                                            <span className="opacity-75">Lesson 01 : Introduction about XD</span>
                                        </div>
                                        <span className="opacity-75">30 mins</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content - Responsive Width */}
                <div className="w-full md:w-3/4">
                    {/* Header Section */}
                    <div className="bg-[#dfd6fb] p-5 mb-6 rounded-lg">
                        <h1 className="text-2xl mb-3">Learn about Adobe XD & Prototyping</h1>
                        <div className="flex justify-between items-center text-sm">
                            <span className="opacity-85">Practice Quiz</span>
                            <div className="flex items-center gap-x-2 opacity-85">
                                <LuClock4 />
                                <span>30 mins</span>
                            </div>
                        </div>
                    </div>

                    {/* Assignment Details */}
                    <div className="bg-[#f6faff] p-6 space-y-6">
                        <div className="bg-[#e2f0ff] p-6 rounded-lg">
                            <h2 className="font-bold text-xl mb-5">Assignment details</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex space-x-8 mb-4 sm:mb-0">
                                    <div>
                                        <span className="font-bold block">Due</span>
                                        <span>March 10, 23:59</span>
                                    </div>
                                    <div>
                                        <span className="font-bold block">Attempts</span>
                                        <span>Unlimited</span>
                                    </div>
                                </div>
                                <Button 
                                    className="w-full sm:w-auto font-bold text-white bg-[#49bbbd] rounded-md px-6 py-3" 
                                    onClick={handleStart}
                                >
                                    Start
                                </Button>
                            </div>
                        </div>

                        {/* Grade Section */}
                        <div className="bg-[#d4faef] p-6 rounded-lg mt-12">
                            <h2 className="text-2xl font-bold mb-3">Your grade</h2>
                            <p className="mb-6">You have not submitted this assignment. We are keeping your highest score.</p>
                            <div className="flex items-center gap-x-2">
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className="w-4 h-1 bg-[#087051]"></div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">
                            <Button 
                                className="w-full sm:w-auto bg-[#49bbbd] font-bold text-white px-8 py-3"
                            >
                                View Submission
                            </Button>
                            <Button 
                                className="w-full sm:w-auto bg-[#49bbbd] font-bold text-white px-8 py-3"
                            >
                                See feedback
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticeQuiz;