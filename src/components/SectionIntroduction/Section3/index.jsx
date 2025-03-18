/* eslint-disable no-unused-vars */
import workers from '../../../assets/images/workers.png';
import students from '../../../assets/images/students.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Section3() {
    return (
        <>
            <div className="text-center pb-[250px] bg-[#f5f5f5]" >
                <motion.div
                    initial={{opacity: 0, y: 150}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: true}}
                >
                    <h1 className="text-[1.3rem] font-bold flex justify-center gap-x-2 mb-[10px]"><span className="text-[#2f327d]">What is</span><span className="text-[#00cbb8]">ITEL?</span></h1>
                    <p className="text-[0.8rem] font-light mb-[50px]">
                        ITEL is a platform that provides online courses in the information technology industry.
                        <br />
                        The platform provides courses for both students and working people.
                    </p>
                    <div className="flex justify-center gap-x-4">
                        <div className="w-[250px] relative duration-500 transition-transform hover:scale-110">
                            <img src={workers} className='absolute z-0' />
                            <div className='absolute z-[1] left-[50%] top-[50px] translate-x-[-50%]'>
                                <h3 className=' text-white font-medium mb-[10px]'>FOR WORKERS</h3>
                                <div className='w-[150px] p-[5px] rounded-[20px] border-white border-[1px] flex items-center justify-center'>
                                    <Link className='text-[0.8rem] text-white'>Start a class today</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-[250px] relative duration-500 transition-transform hover:scale-110">
                            <img src={students} className='absolute z-0' />
                            <div className='absolute z-[1] left-[50%] top-[50px] translate-x-[-50%]'>
                                <h3 className=' text-white font-medium mb-[10px]'>FOR STUDENTS</h3>
                                <div className='w-[150px] p-[5px] rounded-[20px] flex items-center justify-center bg-[#2ab3dd]'>
                                    <Link className='text-[0.8rem] text-white'>Start a class today</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
export default Section3;