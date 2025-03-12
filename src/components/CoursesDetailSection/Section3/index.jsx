import { Link } from "react-router-dom";
import sec3 from '../../../assets/images/detaill31.png';
import { Carousel } from "antd";
function Section3() {
    const offers = [
        {
            image: sec3,
            title: 'FOR WORKERS',
            desciption: 'ITEL’s school management software helps traditional and online schools manage scheduling,'
        },
        {
            image: sec3,
            title: 'FOR STUDENTS',
            desciption: 'ITEL’s school management software helps traditional and online schools manage scheduling,'
        },
        {
            image: sec3,
            title: 'FOR WORKERS',
            desciption: 'ITEL’s school management software helps traditional and online schools manage scheduling,'
        }
    ]
    return (
        <>
            <div className="pb-[50px]">
                <div className="flex justify-between items-center mb-[20px]">
                    <h2 className="font-bold">Top  Education offers and deals are listed here</h2>
                    <Link to='#' className="text-[0.8rem] font-bold text-[#49bbbd]">See all</Link>
                </div>
                <div>
                    <Carousel
                        slidesToShow={3}
                        slidesToScroll={1}
                        autoplay
                        autoplaySpeed={1000}
                        dots={false}
                        arrows={false}
                    >
                        {offers.map((items, index) => (
                            <div className="px-4 relative hover:scale-105 duration-500 transition-transform" key={index}>
                                <img src={sec3} className="w-[350px] h-[250px] "/>
                                <div className="w-[350px] h-[250px] bg-black absolute top-0 opacity-25 rounded-[10px]"></div>
                                <div className="rounded-[10px] absolute top-[30px] left-[5px] px-[50px]">
                                    <div className="flex flex-col gap-y-4">
                                        <div className="w-[45px] h-[45px] flex items-center justify-center bg-[#d94145] rounded-sm">
                                            <span className="font-bold text-white">50%</span>
                                        </div>
                                        <h2 className="font-bold text-[1.2rem] text-white">{items.title}</h2>
                                        <p className="text-[0.9rem] text-white">{items.desciption}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}
export default Section3;