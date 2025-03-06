import React from 'react';
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import student1 from '../../../assets/images/student1.png';
import student2 from '../../../assets/images/student2.png';
import student3 from '../../../assets/images/image3.png';
import student4 from '../../../assets/images/student4.png';

function Section5() {
    const testimonials = [
        {
            id: 1,
            image: student1,
            name: 'Nathaniel Cole',
            text: 'This course truly helped me strengthen my knowledge of Back-end programming. The instructor provided very detailed guidance, and the hands-on exercises were abundant, making me more confident in working on real-world projects.'
        },
        {
            id: 2,
            image: student2,
            name: 'Isabella Grace',
            text: 'An amazing course for anyone wanting to enter the IT industry! The content is clear and easy to understand, even for beginners. I love the step-by-step approach and the structured learning path.'
        },
        {
            id: 3,
            image: student3,
            name: 'Alexander James',
            text: 'I have taken many programming courses before, but this is one of the most in-depth and practical. I especially like the projects they had me include in my case studies that allow immediate application in real work.'
        },
        {
            id: 4,
            image: student4,
            name: 'Aurora Evelyn',
            text: 'This course is extremely useful, helping me master key terminologies in the IT field. The instructor provides only topic-relevant content and truly dedicated supporting guidance throughout the learning process. Definitely worth the investment!'
        }
    ];

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div 
                className="custom-arrow-next" 
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-15px',
                    zIndex: 1,
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#9a77ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
            >
                <RightOutlined style={{ color: 'white' }} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div 
                className="custom-arrow-prev" 
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-15px',
                    zIndex: 1,
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    backgroundColor: '#9a77ff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
            >
                <LeftOutlined style={{ color: 'white' }} />
            </div>
        );
    };

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,          // Thêm tính năng tự động chuyển slide
        autoplaySpeed: 2000,     // Thời gian giữa các lần chuyển slide (3 giây)
        pauseOnHover: true,      // Tạm dừng khi di chuột vào
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-[#e3edf7] py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-bold text-2xl text-center mb-12">What our students have to say</h2>
                <div className="mx-6">
                    <Carousel {...settings}>
                        {testimonials.map((item) => (
                            <div key={item.id} className="px-2">
                                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col mx-2">
                                    <div className="flex flex-col items-center mb-4">
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className="w-16 h-16 rounded-full object-cover mb-3" 
                                        />
                                        <h3 className="font-medium text-center">{item.name}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 flex-grow text-center">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            
            {/* CSS tùy chỉnh cho Ant Design Carousel */}
            <style jsx global>{`
                /* Custom styling for Ant Design carousel */
                .ant-carousel .slick-slide {
                    text-align: center;
                    overflow: hidden;
                }
                
                .ant-carousel .slick-slide img {
                    display: inline-block;
                }
                
                .ant-carousel .slick-track {
                    display: flex !important;
                }
                
                .ant-carousel .slick-slide {
                    height: inherit !important;
                    display: flex !important;
                }
                
                .ant-carousel .slick-slide > div {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
    );
}

export default Section5;