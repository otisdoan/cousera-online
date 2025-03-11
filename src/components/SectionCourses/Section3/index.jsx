import p1 from '../../../assets/images/31.png';
import p2 from '../../../assets/images/32.png';
import p3 from '../../../assets/images/33.png';
import p4 from '../../../assets/images/34.png';
import p5 from '../../../assets/images/35.png';
import p6 from '../../../assets/images/36.png';
import p7 from '../../../assets/images/37.png';
function Section3() {
    const course = [
        {
            image: p1,
            title: 'UI/UX Design',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p2,
            title: 'Web Development',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p3,
            title: 'Software Engineering',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p4,
            title: 'Tech Entrepreneurship',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p5,
            title: 'Digital Marketing & SEO',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p6,
            title: ' Computer Vision & AI',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p7,
            title: 'Game Development',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        },
        {
            image: p4,
            title: 'IT Project Management',
            desciptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod'
        }
    ]
    return (
        <>
            <div className='pb-[50px]'>
                <h2 className="font-bold mb-[20px]">Choice favourite course from top category</h2>
                <div className='flex gap-8 flex-wrap items-center justify-center'>
                    {course.map((items, index) => (
                        <div key={index} className='w-1/5 flex flex-col bg-white rounded-[10px] p-4 items-center pb-[30px]'>
                            <div className={`w-[60px] h-[60px] flex items-center rounded-[5px] justify-center border-[1px] ${index === 0 ? `bg-[#c9ebec]` : index === 1 ? `bg-[#ced5fa]` : 
                                index === 2 ?  `bg-[#e2f0ff]`: index === 3 ? `bg-[#b3f0ea]` : index === 4 ? `bg-[#fcddb5]`: index === 5 ? `bg-[#fad1ce]`: index === 6 ? `bg-[#bebec6]`:
                                index === 7 ? `bg-[#b3f0ea]`: `` }`}>
                                <img src={items.image} className='w-[15px]'/>
                            </div>
                            <span className='mb-[10px] font-semibold text-[1.1rem]'>{items.title}</span>
                            <p className='text-[0.9rem] font-light text-center'>{items.desciptions}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Section3;