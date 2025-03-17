import p1 from '../../../assets/images/p1section2C.png';
import p2 from '../../../assets/images/p2section2C.png';
import p3 from '../../../assets/images/p3section2C.png';
import avartar from '../../../assets/images/avartarsection2.png';
import { Link, useNavigate } from 'react-router-dom';
import { Progress } from 'antd';
function ContentOnGoing() {
    const navigate = useNavigate();
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
    const handleDetail = () => {
        navigate('/courses/view-courses');
    }
    return (
        <>
            <div className='flex justify-center items-center gap-x-7 gap-y-12 flex-wrap pb-[50px]'>
                {courses.map((items, index) => (
                    <div className='bg-white rounded-[10px] p-4 flex flex-col gap-y-4 w-1/4 shadow-lg hover:scale-105 transition-transform duration-700' key={index} onClick={handleDetail}>
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
                ))}
            </div>
        </>
    )
}
export default ContentOnGoing;