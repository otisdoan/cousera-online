/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Button, Carousel } from "antd";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import student1 from '../../../assets/images/student1.png';
import student2 from '../../../assets/images/student2.png';
import student3 from '../../../assets/images/image3.png';
import student4 from '../../../assets/images/student4.png';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
function Section5() {
    const carouselRef = useRef();
    const students = [
        {
            image: student1,
            name: 'Nathaniel Cole',
            desciption: 'This course truly helped me strengthen my knowledge of Back-end programming. The instructor provided very detailed guidance, and the hands-on exercises were abundant, making me more confident in working on real-world projects.'
        },
        {
            image: student2,
            name: 'Isabella Grace',
            desciption: 'An amazing course for anyone wanting to enter the IT industry! The content is clear and easy to understand, even for beginners. I love the step-by-step guidance and the structured learning path.'
        },
        {
            image: student3,
            name: 'Alexander James',
            desciption: 'I have taken many programming courses before, but this is one of the most in-depth and practical ones. The lessons not only teach theory but also include many case studies that allow immediate application in real work.'
        },
        {
            image: student4,
            name: 'Aurora Evelyn',
            desciption: 'This course is extremely useful, helping me master key technologies in the IT field. The student community is also very active, supporting each other throughout the learning process. Definitely worth the investment!'
        },
    ]
    return (
        <>
            <div className='my-[50px]'>
                <motion.div
                    className='bg-[#e3edf7] h-[550px] py-[70px] px-[30px] relative '
                    whileInView={{ opacity: 1, y: 0}}
                    initial={{ opacity: 0, y: 150 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='font-bold mb-[30px] text-[1.1rem]'>What our students have to say</h1>
                    <Carousel
                        ref={carouselRef}
                        slidesToShow={4}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={2000}
                    >
                        {students.map((element, index) => (
                            <div key={index} className='px-4'>
                                <div className='flex flex-col bg-white rounded-[20px] mb-[40px] h-[350px] text-center px-[25px] border-[1px] pt-[25px] duration-500 transition-transform hover:scale-110 shadow-lg'>
                                    <div className='flex flex-col justify-center items-center mb-[15px]'>
                                        <img src={element.image} className='w-[70px]' />
                                        <span className='text-[1.1rem] font-medium '>{element.name}</span>
                                    </div>
                                    <p className='font-light'>{element.desciption}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                    <div className='rounded-full h-[30px] w-[30px] bg-[#49bbbd] text-white flex items-center justify-center cursor-pointer absolute top-[50%] translate-x-[-50%] left-[45px]' onClick={() => carouselRef.current.prev()}>
                        <MdKeyboardArrowLeft />
                    </div>
                    <div className='rounded-full h-[30px] w-[30px] bg-[#49bbbd] text-white flex items-center justify-center absolute top-[50%] translate-x-[-50%] right-[10px]' onClick={() => carouselRef.current.next()}>
                        <MdKeyboardArrowRight />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Section5;
