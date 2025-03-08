import React from 'react';
import { Carousel } from "antd";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import student1 from '../../../assets/images/student1.png';
import student2 from '../../../assets/images/student2.png';
import student3 from '../../../assets/images/image3.png';
import student4 from '../../../assets/images/student4.png';

function Section5() {
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
            <div className='bg-[#e3edf7] h-[550px] py-[70px] px-[30px]'>
                <h1 className='font-bold mb-[30px] text-[1.1rem]'>What our students have to say</h1>
                <Carousel
                    arrows
                    infinite={true}
                    slidesToShow={4}
                    slidesToScroll={1}
                    // prevArrow={<IoIosArrowDropleftCircle />}
                    // nextArrow={<IoIosArrowDroprightCircle />}
                    autoplay={true}
                    autoplaySpeed={2000}

                >
                    {students.map((element, index) => (
                        <div key={index} className='px-4'>
                            <div className='flex flex-col items-center justify-center bg-white rounded-[20px] mb-[50px] h-[350px] text-center px-[25px] pt-[20px] border-[1px] '>
                                <div className='flex flex-col justify-center items-center mb-[15px]'>
                                    <img src={element.image} className='w-[70px]' />
                                    <span className='text-[1.1rem] font-medium '>{element.name}</span>
                                </div>
                                <p className='font-light'>{element.desciption}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Section5;
