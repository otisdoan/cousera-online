/* eslint-disable no-unused-vars */
import unique from '../../../assets/images/Like a pussy.png';
import plus from '../../../assets/images/Individual.png';
import plusAnnual from '../../../assets/images/Corporate.png';
import { FaCheck } from "react-icons/fa6";
import { Button, ConfigProvider } from 'antd';
import { motion } from "framer-motion";
function Section6() {
    const pricing = [
        {
            type: unique,
            price: '49 US$  –  79 US$ /month',
            benefit: [
                'Visit an individual course',
                'Access all courses in the curriculum',
                'Earn certificate upon completion'
            ],
            contentButton: 'Start your course'
        },
        {
            type: plus,
            price: '59 US$ /month',
            benefit: [
                'Cancel anytime',
                'Access 10,000+ courses 170+ top universities',
                'Earn unlimited certificates after trial ends',
                'Learn job-relevant skills over 1,000 applied projects',
                'Choose from over 15 Professional Certificate programs from industry leaders'
            ],
            contentButton: 'Start your 7-day free trial'
        },
        {
            type: plusAnnual,
            price: '399 US$ /year',
            benefit: [
                '14 Day Money Back Guarantee',
                'Everything included in the monthly package',
                'Save when you pay in advance for the year',
                'Enjoy maximum flexibility to achieve work/life balance '
            ],
            contentButton: 'Try Course Plus Annual'
        }
    ]
    return (
        <>
            <div className='pt-[30px] pb-[100px]'>
                <motion.h1
                    className="text-[1.7rem] font-bold text-[#49bbbd] text-center mb-[50px]"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -150 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >Affordable pricing</motion.h1>
                <div className="flex gap-x-4 justify-center">
                    {pricing.map((item, index) => (
                        <motion.div
                            key={index} className="flex flex-col w-[300px] border-[1px] p-6 bg-white rounded-[10px] shadow-lg hover:scale-105 duration-700 transition-transform"
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src={item.type} className='w-[150px] mb-[20px]' />
                            <h2 className='text-[1.4rem] font-bold mb-[20px] whitespace-nowrap'>{item.price}</h2>
                            <div className='h-[330px] flex flex-col gap-y-2'>
                                {item.benefit.map((element, indexE) => (
                                    <div key={indexE} className='flex items-center gap-x-4 gap-y-4 duration-500 transition-transform'>
                                        <div classN ame=''>
                                            <FaCheck className={`w-[25px] h-[25px] rounded-[50%] flex items-center justify-center text-[0.9rem] p-2 ${index === 0 ? ` bg-[#e2e2e2]` : index === 1 ? `bg-[#fdcb6e]` : `bg-[#aef8e3]`}`} />
                                        </div>
                                        <div>
                                            <span className=''>{element}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                defaultHoverBg: '#49bbbd',
                                                defaultHoverBorderColor: '#49bbbd',
                                            },
                                        },
                                        token: {
                                            colorPrimaryHover: 'white'
                                        },
                                    }}
                                >
                                    <Button className='w-full p-5 rounded-[10px] font-bold text-[#49bbbd]'>{item.contentButton}</Button>
                                </ConfigProvider>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Section6;