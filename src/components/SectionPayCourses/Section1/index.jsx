import { Carousel } from 'antd';
import p1 from '../../../assets/images/pay11.png';
import p2 from '../../../assets/images/pay12.png';
import p3 from '../../../assets/images/pay13.png';
import { Link } from 'react-router-dom';
function Section1() {
    const offers = [
        {
            image: p1,
            title: 'Cousera',
            desciption: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'

        },
        {
            image: p2,
            title: 'Cousera',
            desciption: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'

        },
        {
            image: p3,
            title: 'Cousera',
            desciption: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor'

        },
    ]
    return (
        <>
            <div className="pb-[50px] pt-[50px]">
                <div className="flex justify-between items-center mb-[40px]">
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
                            <div className="px-4 relative" key={index}>
                                <img src={items.image} className="w-[350px] h-[280px]" />
                                <div className="w-[350px] h-[280px] bg-black absolute top-0 opacity-25 rounded-[10px]"></div>
                                <div className="rounded-[10px] absolute top-[30px] left-[5px] px-[50px]">
                                    <div className="flex flex-col gap-y-4">
                                        <div className="w-[70px] h-[60px] flex items-center justify-center bg-[#49bbbd] rounded-[10px]">
                                            <span className="font-bold text-white text-[1.6rem]">{index === 1 ? `10%`: `50%`}</span>
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
export default Section1;