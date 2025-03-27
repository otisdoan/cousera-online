import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

function HeaderIntroduction() {
    return (
        <div className="bg-[#6f3dff] py-4 px-5 md:px-10 lg:px-20 xl:px-36 flex flex-col md:flex-row items-center justify-between">
            {/* Logo & Search */}
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
                <div className="w-12 md:w-14 lg:w-16 mr-4 md:mr-8">
                    <Link to="/">
                        <img src={logo} className="w-full" alt="Logo" />
                    </Link>
                </div>
                <div className="w-full md:w-[250px] lg:w-[300px]">
                    <Input 
                        placeholder="Search from courses..." 
                        suffix={<CiSearch />} 
                        className="w-full"
                    />
                </div>
            </div>

            {/* Navigation & Buttons */}
            <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
                <div className="flex gap-4 text-white text-sm md:mr-8">
                    <Link to="#" className="hover:underline">Home</Link>
                    <Link to="/courses" className="hover:underline">Courses</Link>
                    <Link to="#" className="hover:underline">About Us</Link>
                </div>

                <div className="flex gap-3 mt-4 md:mt-0">
                    <div className="w-24 h-9 rounded-full bg-white flex justify-center items-center text-sm">
                        <Link to="/login" className="text-[#6f3dff]">Sign In</Link>
                    </div>
                    <div className="w-24 h-9 rounded-full bg-[#9977fe] text-white flex justify-center items-center text-sm">
                        <Link to="/register">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderIntroduction;