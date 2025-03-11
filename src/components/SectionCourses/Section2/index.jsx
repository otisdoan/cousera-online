import p1 from '../../../assets/images/p1section2C.png';
import p2 from '../../../assets/images/p2section2C.png';
import p3 from '../../../assets/images/p3section2C.png';
import avartar from '../../../assets/images/avartarsection2.png';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Carousel, Progress } from 'antd';
import { useRef } from 'react';

function Section2() {
    const carouselRef = useRef();
    const courses = [
        {
            image: p1,
            title: 'Web Design',
            avatar: avartar,
            name: 'Élise Moreau',
        },
        {
            image: p2,
            title: 'Git and Github',
            avatar: avartar,
            name: 'Élise Moreau',
        },
        {
            image: p3,
            title: 'Font-End Learning',
            avatar: avartar,
            name: 'Élise Moreau',
        },
        {
            image: p1,
            title: 'Web Design',
            avatar: avartar,
            name: 'Élise Moreau',
        },
        {
            image: p2,
            title: 'Git and Github',
            avatar: avartar,
            name: 'Élise Moreau',
        },
        {
            image: p3,
            title: 'Font-End Learning',
            avatar: avartar,
            name: 'Élise Moreau',
        }
    ]
    const handlePrev = () => {
        carouselRef.current.prev();
    }
    const handleNext = () => {
        carouselRef.current.next();
    }
    return (
        <>
            <div className='pt-[20px] pb-[70px]'>
                <div className='flex items-center justify-between mb-[20px]'>
                    <h2 className='text-[1.2rem] font-bold'>Welcome back, ready for your next lesson?</h2>
                    <Link to='#' className='text-[#49bbbd] text-[0.9rem] font-bold'>View hisotry</Link>
                </div>
                <Carousel
                    ref={carouselRef}
                    slidesToShow={3}
                    slidesToScroll={1}
                    autoplay
                    autoplaySpeed={1000}
                    arrows={false}
                    dots={false}
                >
                    {courses.map((items, index) => (
                        <div className='px-3'>
                            <div className='bg-white rounded-[10px] p-4 flex flex-col gap-y-4' key={index}>
                                <img src={items.image} />
                                <span className='font-semibold text-[#252641]'>{items.title}</span>
                                <div className='flex items-center gap-x-2'>
                                    <img src={items.avatar} />
                                    <span className='font-bold text-[0.9rem]'>{items.name}</span>
                                </div>
                                <Progress
                                    showInfo={false}
                                    percent={70}
                                    status="active"
                                    strokeColor={{
                                        from: '#108ee9',
                                        to: '#87d068',
                                    }}
                                />
                                <div className='flex justify-end'>
                                    <span>Lesson 5 of 7</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className='flex items-center justify-end gap-x-4 mt-[20px]'>
                    <div className='bg-[#49bbbd] flex items-center justify-center w-[30px] h-[30px] rounded-[5px] cursor-pointer' onClick={handlePrev}>
                        <MdKeyboardArrowLeft className='text-white' />
                    </div>
                    <div className='bg-[#49bbbd] flex items-center justify-center w-[30px] h-[30px] rounded-[5px] cursor-pointer'onClick={handleNext}>
                        <MdKeyboardArrowRight className='text-white' />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Section2;