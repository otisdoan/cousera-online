/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Button, DatePicker, Form, Input, Modal, notification, Select } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { useForm } from "antd/es/form/Form";
import { supabase } from "../../supabase";
import dayjs from 'dayjs';

function Profiles() {
    const [openModal, setOpenModal] = useState(false);
    const format = 'DD/MM/YYYY';
    const [form] = useForm();
    const [forms] = useForm();
    const email = localStorage.getItem('email');
    const [name, setName] = useState('');
    const [profiles, setProfiles] = useState();
    const [api, contextHolder] = notification.useNotification();
    const onFinish = () => {

    }
    const handleEdit = () => {
        setOpenModal(true);
        forms.setFieldsValue(profiles);
    }
    const handleCancel = () => {
        setOpenModal(false);
    }

    const onFinishUpdate = async (values) => {
        try {
            const { error } = await supabase
                .from('profiles')
                .update(values)
                .eq('email', email)

            if (!error) {
                api["success"]({
                    message: 'Thành công!',
                    description: 'Thông tin đã được cập nhật thành công!',
                    duration: 2,
                    placement: 'topRight',
                });
                setOpenModal(false);
                setTimeout(() => {
                    window.location.href = '/courses';
                }, 2000)
            } else {
                api["error"]({
                    message: 'Thất bại!',
                    description: 'Cập nhật thông tin thất bại. Vui lòng thử lại!',
                    duration: 2,
                    placement: 'topRight',
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('email', email);

                if (!error && data && data.length > 0) {
                    const profile = data[0];
                    if (profile.born) {
                        setName(profile.name);
                        profile.born = dayjs(profile.born);
                    }
                    setProfiles(profile);
                    form.setFieldsValue(profiles);
                }
            } catch (error) {
                console.log(error);
            }
        };  
        fetchProfiles();
    }, [email, form, profiles]);
    return (
        <>
            {contextHolder}
            <div className="flex justify-center my-[50px]">
                <div className="px-[150px] bg-white shadow-lg rounded-lg w-1/2 p-4 pb-[50px]">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-x-4 mb-[20px]">
                            <Avatar size={74} icon={<UserOutlined />} />
                            <div className="flex flex-col text-[0.9rem]">
                                <span className="text-[1.1rem] font-bold">{name}</span>
                                <span>{email}</span>
                            </div>
                        </div>
                        <Button className="text-white font-medium bg-[#875dff] px-[20px]" onClick={handleEdit}>Edit</Button>
                        <Modal open={openModal} onCancel={handleCancel} footer={false}>
                            <h1 className="font-bold text-[1.2rem] text-center">Chỉnh sửa thông tin cá nhân</h1>
                            <div>
                                <Form
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                    onFinish={onFinishUpdate}
                                    form={forms}
                                >
                                    <Form.Item
                                        label={'Fullname'}
                                        name={'name'}
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Fullname is required'
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label={'Hobby'}
                                        name={'hobby'}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <div className="flex gap-x-4 items-center">
                                        <Form.Item
                                            label={'Gender'}
                                            name={'gender'}
                                        >
                                            <Select options={[
                                                {
                                                    label: 'Female',
                                                    value: 'Female'
                                                },
                                                {
                                                    label: 'Male',
                                                    value: 'Male'
                                                }
                                            ]} />
                                        </Form.Item>
                                        <Form.Item
                                            label={'Born'}
                                            name={'born'}
                                        >
                                            <DatePicker format={format} />
                                        </Form.Item>
                                    </div>
                                    <Form.Item
                                        label={'Address'}
                                        name={'address'}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item className="flex justify-end">
                                        <Button className="mr-4" onClick={handleCancel}>Cancel</Button>
                                        <Button className="text-white bg-[#875dff]" htmlType="submit">Save</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <Form
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            onFinish={onFinish}
                            form={form}
                        >
                            <Form.Item
                                label={'Fullname'}
                                name={'name'}
                            >
                                <Input disabled />
                            </Form.Item>
                            <Form.Item
                                label={'Hobby'}
                                name={'hobby'}
                            >
                                <Input disabled />
                            </Form.Item>
                            <div className="flex gap-x-4 items-center">
                                <Form.Item
                                    label={'Gender'}
                                    name={'gender'}
                                >
                                    <Select options={[
                                        {
                                            label: 'Female',
                                            value: 'Female'
                                        },
                                        {
                                            label: 'Male',
                                            value: 'Male'
                                        }
                                    ]} disabled />
                                </Form.Item>
                                <Form.Item
                                    label={'Born'}
                                    name={'born'}
                                >
                                    <DatePicker format={format} disabled />
                                </Form.Item>
                            </div>
                            <Form.Item
                                label={'Address'}
                                name={'address'}
                            >
                                <Input disabled />
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <span className="font-bold">My email Address</span>
                        <div className="flex items-center gap-x-4">
                            <div className="flex items-center justify-center rounded-full p-3 bg-[#f2edff]">
                                <MdEmail className="text-[#875dff]" />
                            </div>
                            <span className="font-bold text-[0.9rem]">{email}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profiles;