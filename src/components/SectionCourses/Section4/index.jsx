import { Link } from "react-router-dom";
import p1 from '../../../assets/images/41.png';
import p2 from '../../../assets/images/42.png';
import p3 from '../../../assets/images/43.png';
import p4 from '../../../assets/images/44.png';
import p5 from '../../../assets/images/45.png';
import { Carousel } from "antd";
function Section4() {
    const courses = [
        {
            image: p1,
            title: 'AWS Certified solutions Architect',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            avatar: p5
        },
        {
            image: p2,
            title: 'AWS Certified solutions Architect',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            avatar: p5
        },
        {
            image: p2,
            title: 'AWS Certified solutions Architect',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            avatar: p5
        },
        {
            image: p1,
            title: 'AWS Certified solutions Architect',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            avatar: p5
        }
    ]
    return (
        <>
            <div className="pt-[70px] pb-[100px]">
                <div className="flex items-center justify-between mb-[20px]">
                    <h2 className="font-bold">Get choice of your course</h2>
                    <Link to='#' className="text-[#49bbbd] text-[0.9rem]">See all</Link>
                </div>
                <Carousel
                    slidesToShow={4}
                    slidesToScroll={1}
                    autoplay
                    autoplaySpeed={1000}
                    arrows={false}
                    dots={false}
                >
                    {courses.map((items, index) => (
                        <div className="px-4">
                            <div className="bg-white rounded-[10px] flex flex-col gap-y-2 p-4 pb-[20px] shadow-lg hover:scale-105 duration-500 transition-transform" key={index}>
                                <img src={items.image} />
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-1">
                                        <img src={p3} className="w-[20px]" />
                                        <span className="font-light text-[0.8rem]">Design</span>
                                    </div>
                                    <div className="flex items-center gap-x-1">
                                        <img src={p4} className="w-[20px]" />
                                        <span className="font-light text-[0.8rem]">3 Month</span>
                                    </div>
                                </div>
                                <p className="font-medium text-[1.1rem]">{items.title}</p>
                                <p className="font-light">{items.desciptions}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-x-2 items-center">
                                        <img src={p5} className="w-[36px]" />
                                        <span className="font-bold">Lina</span>
                                    </div>
                                    <div className="flex gap-x-2 items-center">
                                        <span className="text-[1.2rem] font-extralight line-through">$100</span>
                                        <span className="font-bold text-[#49bbbd] text-[1.3rem]">$80</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}
export default Section4;