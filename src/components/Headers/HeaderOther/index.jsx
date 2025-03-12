import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { CiSearch } from "react-icons/ci";
import { Avatar, Dropdown, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
function HeaderOther() {
    const items = [
        {
            icon: <IoLogOut />,
            label: (
                <Link to='/'>Log out</Link>
            )
        }
    ]
    return (
        <>
            <div className=''>
                <div className='bg-[#d7cef3] flex items-center justify-between py-[20px] px-[150px]'>
                    <div className='flex items-center'>
                        <div className='w-[60px] mr-[50px]'>
                            <Link to='/'> <img src={logo} className='w-full' /></Link>
                        </div>
                        <div>
                            <Input placeholder='Search from courses...' suffix={<CiSearch />} className='w-[300px]' />
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex gap-x-[20px] mr-[70px] text-[0.9rem]'>
                            <Link to='#'>Home</Link>
                            <Link to='/courses/process-courses'>My Courses</Link>
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
                                <span className='font-bold'>Le Doan Hieu</span>
                                <MdKeyboardArrowDown className='cursor-pointer'/>
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