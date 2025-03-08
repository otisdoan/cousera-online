import bg from '../../../assets/images/header-pic.png';
import play from '../../../assets/images/play.svg';
import girl from '../../../assets/images/girl.png';
import headerData from '../../../assets/images/header-number.png';
import earthIcon from '../../../assets/images/Earth.png';
import peopleIcon from '../../../assets/images/people.png';
import clockIcon from '../../../assets/images/Clock.png';
import { Link } from 'react-router-dom';

function Section1() {
    return (
        <>
            <div className='mb-[600px]'>
                <div className='relative '>
                    <img src={bg} alt="Background" className='w-full h-[600px] absolute z-0' />
                    <div className='flex flex-col items-start absolute z-10 top-[50%] translate-y-1/2 px-[150px] overflow-hidden'>
                        <h1 className='text-white text-[1.5rem] font-bold mb-[20px]'>
                            <span className='text-[#f48c06]'>Studying</span> Online is now
                            <br />
                            much easier
                        </h1>
                        <p className='text-white text-[0.9rem]'>
                            ITEL is an interesting platform that will teach
                            <br />
                            you in a more interactive way
                        </p>
                        <div className='flex items-center justify-center gap-x-4'>
                            <div className='text-white font-bold bg-[#9a77ff] rounded-[20px] w-[130px] h-[40px] flex justify-center items-center'>
                                <Link to="#">Join for free</Link>
                            </div>
                            <div className='flex items-center justify-center gap-x-4'>
                                <img src={play} alt="Play icon" className='h-[120px] pt-[20px]' />
                                <span className="text-white">Watch how it works</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={girl} alt="Girl" className='h-[600px] ml-[200px] absolute top-[85px] right-[250px]' />
                <img src={headerData} alt="Header Data" className='absolute w-[500px] right-[250px] top-[200px]' />
                <img src={earthIcon} alt="Earth Icon" className='absolute right-[350px] top-[380px] w-[30px]' />
                <img src={clockIcon} alt="Clock Icon" className='absolute right-[690px] top-[255px] w-[30px]' />
                <img src={peopleIcon} alt="People Icon" className='absolute right-[690px] top-[470px] w-[30px]' />
            </div>
        </>
    )
}
export default Section1;
