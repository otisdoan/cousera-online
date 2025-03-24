import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { Avatar, Dropdown, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { supabase } from '../../../supabase';
import { useEffect, useState } from 'react';
import { ImProfile } from "react-icons/im";
function HeaderOther() {
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const [nameUser, setNameUser] = useState('');
    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (!error) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('email');
                localStorage.removeItem('idUser');
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }

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

    useEffect(() => {
        const fetchNameUse = async () => {
            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('email', email)

                if (!error) {
                    setNameUser(data[0]?.name)
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchNameUse();
    }, [email])

    return (
        <>
            <div className=''>
                <div className='bg-[#d7cef3] flex items-center justify-between py-[20px] px-[150px]'>
                    <div className='flex items-center'>
                        <div className='w-[60px] mr-[50px]'>
                            <a href='/courses'> <img src={logo} className='w-full' /></a>
                        </div>
                        <div>
                            <Input placeholder='Search from courses...' suffix={<CiSearch />} className='w-[300px]' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex gap-x-[20px] mr-[70px] text-[0.9rem]'>
                            <a href='/courses'>Home</a>
                            <NavLink to='/courses/process-courses'>My Courses</NavLink>
                        </div>
                        <div className='flex items-center gap-x-4'>
                            <Avatar icon={<UserOutlined />} />
                            <Dropdown
                                trigger={'click'}
                                menu={{
                                    items,
                                }}
                            >
                                <div className='flex items-center gap-x-2'>
                                    <span className='font-bold'>{nameUser}</span>
                                    <MdKeyboardArrowDown className='cursor-pointer' />
                                </div>
                            </Dropdown>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default HeaderOther;