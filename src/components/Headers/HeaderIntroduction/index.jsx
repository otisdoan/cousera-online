import logo from '../../../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';

function HeaderIntroduction() {
    return (
        <>
            <div className=''>
                <div className='bg-[#6f3dff] flex items-center justify-between py-[20px] px-[100px]'>
                    <div className='flex items-center'>
                        <div className='w-[60px] mr-[50px]'>
                           <Link to='/'> <img src={logo} className='w-full' /> </Link>
                        </div>
                        <div>
                            <Input placeholder='Search from courses...' suffix={<CiSearch />} className='w-[300px]' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex gap-x-[20px] text-white mr-[70px] text-[0.9rem]'>
                            <Link to='#'>Home</Link>
                            <Link to='#'>Courses</Link>
                            <Link to='#'>About Us</Link>
                        </div>
                        <div className='flex gap-x-5 text-[0.9rem]'>
                            <div className='w-[110px] h-[35px] rounded-[20px] bg-white flex justify-center items-center'>
                                <Link to='/login'>Sign In</Link>
                            </div>
                            <div className='w-[110px] h-[35px] rounded-[20px] bg-[#9977fe] text-white flex justify-center items-center'>
                                <Link to='/register'>Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderIntroduction;