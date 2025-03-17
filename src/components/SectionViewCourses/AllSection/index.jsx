import { FaArrowLeftLong } from "react-icons/fa6";
import { IoBook } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
function AllSection() {
    const navigate = useNavigate();
    const handleReturn = () => {
        navigate(-1);
    }
    return (
        <>
            <div className="px-[150px] my-[20px]">
                <div className="flex gap-x-4">
                    <div className="w-1/4 p-4">
                        <div className="flex items-center justify-center bg-[#9c4df4] w-9 h-8 cursor-pointer mb-7" onClick={handleReturn}><FaArrowLeftLong className="text-white" /></div>
                        <div>
                            <h2 className="font-bold text-[1.1rem] mb-[20px]">Change Simplification</h2>
                            <div className="flex flex-col gap-y-4 text-[0.7rem]">
                                {Array.from({ length: 4 }, (_, i) => (
                                    <Link to='/courses/view-courses/practice-quiz'>
                                        <div key={i} className="flex justify-between items-center bg-[#e2f0ff] p-3 rounded-md hover:bg-[#49bbbd] hover:text-white duration-500 cursor-pointer">
                                            <div className="flex gap-x-2 items-center justify-center">
                                                <IoBook />
                                                <span className=" opacity-75">Lesson 01 : Introduction about XD</span>
                                            </div>
                                            <span className=" opacity-75">30 mins</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[1.1rem] mb-[20px] mt-[40px]">PRACTICE QUIZ</h2>
                            <div className="flex flex-col gap-y-4 text-[0.7rem]">
                                {Array.from({ length: 12 }, (_, i) => (
                                    <Link to='/courses/view-courses/practice-quiz'>
                                        <div key={i} className="flex justify-between items-center bg-[#e2f0ff] p-3 rounded-md hover:bg-[#49bbbd] hover:text-white duration-500 cursor-pointer">
                                            <div className="flex gap-x-2 items-center">
                                                <IoBook />
                                                <span className="opacity-75">Lesson 01 : Introduction about XD</span>
                                            </div>
                                            <span className="opacity-75">30 mins</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="font-bold text-[1.1rem] mb-[20px] mt-[40px]">PRACTICE QUIZ</h2>
                            <div className="flex flex-col gap-y-4 text-[0.7rem]">
                                {Array.from({ length: 7 }, (_, i) => (
                                    <Link to='/courses/view-courses/practice-quiz'>
                                        <div key={i} className="flex justify-between items-center bg-[#e2f0ff] p-3 rounded-md hover:bg-[#49bbbd] hover:text-white duration-500 cursor-pointer">
                                            <div className="flex gap-x-2 items-center">
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
                    <div className="w-3/4">
                        <div className="bg-[#dfd6fb] p-5">
                            <h1 className="text-[1.7rem] mb-[10px]">Learn about Adobe XD & Prototyping</h1>
                            <div className="flex justify-between">
                                <span className="opacity-85  text-[0.9rem]">Introduction about XD</span>
                                <div className="flex items-center opacity-85 text-[0.9rem] gap-x-1">
                                    <LuClock4 />
                                    <span>1 hour</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#ebf5ff] p-7">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/SqcY0GlETPk?si=PbNtONCWuvWwdj47"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                                className="w-full h-[40rem] mt-[20px]"
                            >
                            </iframe>
                            <div className="flex flex-col gap-y-4 text-[0.9rem]">
                                <h2 className="font-bold mt-[20px] text-[1.4rem]">Course Details</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis consectetur adipiscing elit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-4 text-[0.9rem]">
                                <h2 className="font-bold mt-[20px] text-[1.4rem]">Certification</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-4 text-[0.9rem]">
                                <h2 className="font-bold mt-[20px] text-[1.4rem]"> Who this course is for</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                    facilisis consectetur adipiscing elit.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-4 text-[0.9rem]">
                                <h2 className="font-bold mt-[20px] text-[1.4rem]"> What you'll learn in this course:</h2>
                                {Array.from({ length: 5 }, (_, i) => (
                                    <div className="flex gap-x-1 items-center" key={i}>
                                        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllSection;