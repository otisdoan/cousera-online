import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { Avatar, Dropdown, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { useState } from 'react';

function HeaderOther() {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        // Implement logout logic here
        navigate('/login');
    }

    const items = [
        {
            icon: <ImProfile />,
            label: (
               <Link to='/courses/profiles'>My profiles</Link>
            )
        },
        {
            icon: <IoLogOut />,
            label: (
                <span onClick={handleLogout}>Log out</span>
            )
        }
    ]

    return (
        <div className=''>
            <div className='bg-[#d7cef3] py-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[150px]'>
                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex justify-end mb-4">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-2xl focus:outline-none"
                    >
                        {mobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Main Header Content */}
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    {/* Logo and Search Section */}
                    <div className='flex flex-col md:flex-row items-center w-full md:w-auto'>
                        <div className='w-12 md:w-[60px] mb-4 md:mb-0 md:mr-[50px] flex-shrink-0'>
                            <Link to='/'>
                                <img 
                                    src={logo} 
                                    className='w-full h-auto object-contain' 
                                    alt="Logo" 
                                />
                            </Link>
                        </div>
                        <div className='w-full md:w-auto'>
                            <Input 
                                placeholder='Search from courses...' 
                                suffix={<CiSearch />} 
                                className='w-full md:w-[300px]' 
                            />
                        </div>
                    </div>

                    {/* Navigation and User Profile Section */}
                    <div className={`
                        ${mobileMenuOpen ? 'block' : 'hidden'} 
                        md:block w-full md:w-auto
                        mt-4 md:mt-0
                    `}>
                        <div className='flex flex-col md:flex-row items-center'>
                            {/* Navigation Links */}
                            <div className='flex flex-col md:flex-row gap-4 md:gap-x-[20px] mb-4 md:mb-0 md:mr-[70px] text-sm'>
                                <Link to='#' className='text-center md:text-left'>Home</Link>
                                <NavLink 
                                    to='/courses/process-courses' 
                                    className='text-center md:text-left'
                                >
                                    My Courses
                                </NavLink>
                            </div>

                            {/* User Profile */}
                            <div className='flex items-center justify-center md:justify-start gap-x-4'>
                                <Avatar 
                                    icon={<UserOutlined />} 
                                    size={{
                                        xs: 32,
                                        sm: 40,
                                        md: 40,
                                        lg: 48,
                                        xl: 48,
                                        xxl: 48,
                                    }} 
                                />
                                <Dropdown
                                    trigger={['click']}
                                    menu={{
                                        items,
                                    }}
                                >
                                    <div className='flex items-center gap-x-2 cursor-pointer'>
                                        <span className='font-bold text-sm md:text-base'>Le Doan Hieu</span>
                                        <MdKeyboardArrowDown />
                                    </div>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderOther;