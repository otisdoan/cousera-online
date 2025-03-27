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
            {/* Mobile Sidebar Toggle - Improved Responsiveness */}
            <div className="md:hidden flex justify-end mb-4">
                <Button 
                    onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                    className="text-base sm:text-lg p-2"
                >
                    {mobileSidebarOpen ? '✕' : '☰'}
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                {/* Sidebar - Enhanced Responsive Behavior */}
                <div className={`
                    ${mobileSidebarOpen ? 'block' : 'hidden'} 
                    md:block md:w-1/4 
                    w-full
                    transition-all duration-300 ease-in-out
                `}>
                    <div className="flex items-center justify-center bg-[#9c4df4] w-9 h-8 cursor-pointer mb-4 sm:mb-7" onClick={handleReturn}>
                        <FaArrowLeftLong className="text-white text-sm sm:text-base" />
                    </div>

                    {/* Change Simplification Section - Responsive Text and Spacing */}
                    <div className="mb-6 sm:mb-8">
                        <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-5">Change Simplification</h2>
                        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                            {Array.from({ length: 4 }, (_, i) => (
                                <Link 
                                    key={i} 
                                    to='/courses/view-courses/practice-quiz'
                                    className="block"
                                >
                                    <div className="flex justify-between items-center bg-[#e2f0ff] p-2 sm:p-3 rounded-md hover:bg-[#49bbbd] hover:text-white transition-colors duration-500">
                                        <div className="flex items-center gap-x-1 sm:gap-x-2">
                                            <IoBook className="text-sm sm:text-base" />
                                            <span className="opacity-75 text-xs sm:text-sm">Lesson 01 : Introduction about XD</span>
                                        </div>
                                        <span className="opacity-75 text-xs sm:text-sm">30 mins</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Practice Quiz Section - Similar Responsive Adjustments */}
                    <div>
                        <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-5">PRACTICE QUIZ</h2>
                        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                            {Array.from({ length: 7 }, (_, i) => (
                                <Link 
                                    key={i} 
                                    to='/courses/view-courses/practice-quiz'
                                    className="block"
                                >
                                    <div className="flex justify-between items-center bg-[#e2f0ff] p-2 sm:p-3 rounded-md hover:bg-[#49bbbd] hover:text-white transition-colors duration-500">
                                        <div className="flex items-center gap-x-1 sm:gap-x-2">
                                            <IoBook className="text-sm sm:text-base" />
                                            <span className="opacity-75 text-xs sm:text-sm">Lesson 01 : Introduction about XD</span>
                                        </div>
                                        <span className="opacity-75 text-xs sm:text-sm">30 mins</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content - Responsive Width and Typography */}
                <div className="w-full md:w-3/4">
                    {/* Header Section - Responsive Text Sizing */}
                    <div className="bg-[#dfd6fb] p-3 sm:p-5 mb-4 sm:mb-6 rounded-lg">
                        <h1 className="text-xl sm:text-2xl mb-2 sm:mb-3">Learn about Adobe XD & Prototyping</h1>
                        <div className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="opacity-85">Practice Quiz</span>
                            <div className="flex items-center gap-x-1 sm:gap-x-2 opacity-85">
                                <LuClock4 className="text-sm sm:text-base" />
                                <span>30 mins</span>
                            </div>
                        </div>
                    </div>

                    {/* Assignment Details - Responsive Layout */}
                    <div className="bg-[#f6faff] p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <div className="bg-[#e2f0ff] p-4 sm:p-6 rounded-lg">
                            <h2 className="font-bold text-lg sm:text-xl mb-3 sm:mb-5">Assignment details</h2>
                            <div className="flex flex-col sm:flex-row justify-between items-center">
                                <div className="flex space-x-4 sm:space-x-8 mb-3 sm:mb-0">
                                    <div className="text-xs sm:text-base">
                                        <span className="font-bold block text-sm sm:text-base">Due</span>
                                        <span>March 10, 23:59</span>
                                    </div>
                                    <div className="text-xs sm:text-base">
                                        <span className="font-bold block text-sm sm:text-base">Attempts</span>
                                        <span>Unlimited</span>
                                    </div>
                                </div>
                                <Button 
                                    className="w-full sm:w-auto font-bold text-white bg-[#49bbbd] rounded-md px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base" 
                                    onClick={handleStart}
                                >
                                    Start
                                </Button>
                            </div>
                        </div>

                        {/* Grade Section - Responsive Typography */}
                        <div className="bg-[#d4faef] p-4 sm:p-6 rounded-lg mt-8 sm:mt-12">
                            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Your grade</h2>
                            <p className="mb-4 sm:mb-6 text-xs sm:text-base">You have not submitted this assignment. We are keeping your highest score.</p>
                            <div className="flex items-center gap-x-2">
                                {[1, 2, 3].map((_, index) => (
                                    <div key={index} className="w-3 sm:w-4 h-1 bg-[#087051]"></div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons - Responsive Layout */}
                        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-10">
                            <Button 
                                className="w-full sm:w-auto bg-[#49bbbd] font-bold text-white px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-base"
                            >
                                View Submission
                            </Button>
                            <Button 
                                className="w-full sm:w-auto bg-[#49bbbd] font-bold text-white px-4 sm:px-8 py-2 sm:py-3 text-xs sm:text-base"
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