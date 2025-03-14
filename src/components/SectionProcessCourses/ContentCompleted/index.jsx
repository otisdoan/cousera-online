import p1 from '../../../assets/images/completed1.png';
import p2 from '../../../assets/images/43.png';
import p3 from '../../../assets/images/completedd3.png';
import p4 from '../../../assets/images/completed4.png';
function ConntentComplete() {
    const courses = [
        {
            image: p1,
            title: 'Graphic Design',
            description: 'The art and practice of creating visual content to convey messages using images, colors, typography, and layout.'

        },
        {
            image: p1,
            title: 'Graphic Design',
            description: 'The art and practice of creating visual content to convey messages using images, colors, typography, and layout.'

        },
        {
            image: p1,
            title: 'Graphic Design',
            description: 'The art and practice of creating visual content to convey messages using images, colors, typography, and layout.'

        },
        {
            image: p1,
            title: 'Graphic Design',
            description: 'The art and practice of creating visual content to convey messages using images, colors, typography, and layout.'

        },
        {
            image: p1,
            title: 'Graphic Design',
            description: 'The art and practice of creating visual content to convey messages using images, colors, typography, and layout.'

        },
        {
            image: p1,
            title: 'Graphic Design',
            description: 'The art and practice of creating visual content to convey messages using images, colors, typography, and layout.'

        }
    ]
    return (
        <>
            <div className='flex items-center gap-12 flex-wrap justify-center pb-[60px]'>
                {courses.map((items, index) => (
                    <div key={index} className='bg-white rounded-[10px] shadow-lg hover:scale-105 transition-transform p-4 w-1/4'>
                        <img src={p1}/>
                        <div className='flex justify-between items-center my-[15px]'>
                            <div className='flex items-center gap-x-2'>
                                <img src={p2} className=''/>
                                <span className='text-[0.9rem] opacity-35 font-bold'>Design</span>
                            </div>
                            <div>
                                <img src={p3} className='w-[36px]'/>
                            </div>
                        </div>
                        <div className='flex flex-col mb-[20px]'>
                            <h3 className='text-[1.6rem] font-bold text-[#ff6b00]'>{items.title}</h3>
                            <p className='opacity-45 text-[0.9rem]'>
                                {items.description}
                            </p>
                        </div>
                        <div className='flex items-center justify-between mb-[20px]'>
                            <div className='flex items-center gap-x-2'>
                                <img src={p4} className='w-[20px]'/>
                                <span className='text-[0.9rem] font-bold'>4.2</span>
                            </div>
                            <div className='w-[1px] h-[15px] border-l-[1px] border-l-black opacity-60'></div>
                            <span className='text-[0.9rem] font-bold'>2 Hrs 36 Mins</span>
                        </div>
                        <div className='flex justify-end'>
                            <span className='uppercase text-[#167f71] underline font-bold'>View Certificate</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ConntentComplete;