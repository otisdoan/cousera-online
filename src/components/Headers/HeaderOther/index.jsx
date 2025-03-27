import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { Avatar, Dropdown, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useState } from 'react';

function HeaderOther() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const items = [
        {
            icon: <IoLogOut />,
            label: (
                <Link to='/'>Log out</Link>
            )
        }
    ];

    return (
        <div className="bg-[#d7cef3] py-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36">
            {/* Container for flex layout with responsive wrapping */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Logo & Search Section */}
                <div className="flex flex-col sm:flex-row items-center w-full md:w-auto space-y-4 sm:space-y-0 sm:space-x-8">
                    {/* Logo with responsive sizing */}
                    <div className="w-12 sm:w-14 md:w-16 flex-shrink-0">
                        <Link to="/">
                            <img 
                                src={logo} 
                                className="w-full h-auto object-contain" 
                                alt="Logo" 
                            />
                        </Link>
                    </div>
                    
                    {/* Search Input with responsive width */}
                    <div className="w-full sm:w-[250px] md:w-[300px] max-w-md">
                        <Input
                            placeholder="Search from courses..."
                            suffix={<CiSearch />}
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Navigation & User Profile Section */}
                <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                    {/* Mobile Menu Toggle for smaller screens */}
                    <div className="md:hidden w-full flex justify-end mb-4">
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-2xl focus:outline-none"
                        >
                            {mobileMenuOpen ? '✕' : '☰'}
                        </button>
                    </div>

                    {/* Navigation Links - Responsive Visibility */}
                    <div className={`
                        ${mobileMenuOpen ? 'block' : 'hidden'} 
                        md:block w-full md:w-auto
                        flex flex-col md:flex-row 
                        items-center space-y-4 md:space-y-0 md:space-x-6
                        text-center md:text-left
                    `}>
                        <div className="flex flex-col md:flex-row gap-4 text-sm mb-4 md:mb-0 md:mr-8">
                            <Link to="#" className="hover:underline py-2 md:py-0">Home</Link>
                            <NavLink to="/courses/process-courses" className="hover:underline py-2 md:py-0">My Courses</NavLink>
                        </div>

                        {/* User Profile Section */}
                        <div className="flex items-center justify-center md:justify-start gap-4">
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
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <span className="font-bold text-sm sm:text-base">Le Doan Hieu</span>
                                    <MdKeyboardArrowDown />
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderOther;