import { Button, Progress } from "antd";
import { MdOutlineStar } from "react-icons/md";
import avatar from '../../../assets/images/detailavarta.png';
import clock from '../../../assets/images/detailclock.png';
import detail1 from '../../../assets/images/detail1.png';
import tw from '../../../assets/images/twitter.png';
import fa from '../../../assets/images/facebook.png';
import yo from '../../../assets/images/youtube.png';
import te from '../../../assets/images/telegram.png';
import wh from '../../../assets/images/whatsapp.png';
import ins from '../../../assets/images/instagram.png';
import { Link } from "react-router-dom";
function Section2() {
    const users = [
        {
            avatar: avatar,
            name: 'Lina',
            desciption: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
        },
        {
            avatar: avatar,
            name: 'Lina',
            desciption: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
        },
    ];
    return (
        <>
            <div className="flex pt-[100px] mt-[-280px] pb-[40px]">
                <div className="w-2/3 flex flex-col justify-end">
                    <div className="flex items-center gap-x-6 mb-[50px]">
                        {Array.from({ length: 4 }, (_, i) => (
                            <div key={i}>
                                <Button className={`rounded-[7px] font-bold px-[20px] py-[10px] ${i === 3 ? `bg-[#49bbbd] text-white` : `bg-[#c7c7c7] text-black`}`}>Overview</Button>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#dbe9f8] flex flex-col gap-y-4 p-4 rounded-[10px] px-[100px] pt-[30px] pb-[50px]">
                        <div className="flex items-center justify-between mb-[50px]">
                            <div className="bg-white rounded-[10px] p-4 flex flex-col gap-y-3 items-center w-[200px]">
                                <span>4 out of 5</span>
                                <div className="flex items-center justify-center">
                                    <MdOutlineStar className="text-[#fdb022]" />
                                    <MdOutlineStar className="text-[#fdb022]" />
                                    <MdOutlineStar className="text-[#fdb022]" />
                                    <MdOutlineStar className="text-[#fdb022]" />
                                    <MdOutlineStar className="text-[#fdb022]" />
                                </div>
                                <span className="font-light">Top Raiting</span>
                            </div>
                            <div className="flex flex-col w-[350px] ">
                                <div className="flex items-center gap-x-4">
                                    <span className="whitespace-nowrap">5 Stars</span>
                                    <Progress percent={80} size="small" showInfo={false} strokeColor='#49bbbd' />
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <span className="whitespace-nowrap">4 Stars</span>
                                    <Progress percent={80} size="small" showInfo={false} strokeColor='#49bbbd' />
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <span className="whitespace-nowrap">3 Stars</span>
                                    <Progress percent={80} size="small" showInfo={false} strokeColor='#49bbbd' />
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <span className="whitespace-nowrap">2 Stars</span>
                                    <Progress percent={80} size="small" showInfo={false} strokeColor='#49bbbd' />
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <span className="whitespace-nowrap">1 Stars</span>
                                    <Progress percent={80} size="small" showInfo={false} strokeColor='#49bbbd' />
                                </div>
                            </div>
                        </div>
                        <div>
                            {users.map((items, index) => (
                                <div key={index} className="flex flex-col gap-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-x-3">
                                            <img src={items.avatar} className="w-[40px]" />
                                            <div>
                                                <span className="font-bold">{items.name}</span>
                                                <div className="flex items-center justify-center">
                                                    <MdOutlineStar className="text-[#fdb022]" />
                                                    <MdOutlineStar className="text-[#fdb022]" />
                                                    <MdOutlineStar className="text-[#fdb022]" />
                                                    <MdOutlineStar className="text-[#fdb022]" />
                                                    <MdOutlineStar className="text-[#fdb022]" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <img src={clock} className="w-[20px]" />
                                            <span className="text-[0.8rem]">3 Month</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-light">{items.desciption}</p>
                                    </div>
                                    {index === 0 && (
                                        <div className="border-t-[1px] border-t-black opacity-25 mb-[20px]"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-center">
                    <div className="bg-white rounded-[10px] p-4 w-[300px] h-[810px]">
                        <img src={detail1} className="w-full mb-[10px] h-[150px]" />
                        <div className="flex justify-between items-center">
                            <span className="text-[1.5rem] font-bold">$49.65</span>
                            <span className="font-medium opacity-55 text-[1.2rem] line-through">$99.99</span>
                            <span className="font-medium opacity-55 text-[1.2rem]">50% Off</span>
                        </div>
                        <div className="text-center my-[20px]">
                            <span className="text-[#49bbbd] font-semibold">11 hour left at this price</span>
                        </div>
                        <Link to='/courses/pay-courses'><Button className="text-white font-bold rounded-[5px] bg-[#49bbbd] w-full">Buy Now</Button></Link>
                        <div className="w-full h-[1px] border-t-[0.8px] border-t-black my-[15px] opacity-35"></div>
                        <h2 className="text-[1.1rem] font-bold mb-[80px]">This Course included</h2>
                        <div className="w-full h-[1px] border-t-[0.8px] border-t-black my-[15px] opacity-35"></div>
                        <h2 className="text-[1.1rem] font-bold">Training 5 or more people</h2>
                        <p className="text-[0.8rem] opacity-45 mt-[5px]">Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <div className="w-full h-[1px] border-t-[0.8px] border-t-black my-[15px] opacity-35"></div>
                        <h2 className="text-[1.1rem] font-bold mb-[20px]">Share this course</h2>
                        <div className="flex items-center gap-x-4 w-[20px]">
                            <img src={tw} />
                            <img src={fa} />
                            <img src={yo} />
                            <img src={ins} />
                            <img src={te} />
                            <img src={wh} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section2;