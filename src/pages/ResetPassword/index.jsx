import { Button, Form, Input, notification } from "antd";
import { supabase } from "../../supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const [api, contextHolder] = notification.useNotification();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const onFinish = async ({ password }) => {
        setIsSubmitting(true);
        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            api['error']({
                message: 'Thất bại!',
                description: 'Đặt lại mật khẩu thất bại. Vui lòng thử lại!',
                duration: 2,
                placement: 'topRight',
            });

        } else {
            api['success']({
                message: 'Thành công!',
                description: 'Mật khẩu đã được đặt lại thành công!',
                duration: 2,
                placement: 'topRight',
            });
            setIsSubmitting(false);
            setTimeout(() => {
                navigate('/login')
            }, 2000)

        };
    }
    return (
        <>
            {contextHolder}
            <div className="px-[150px]">
                <div className="bg-white rounded-lg flex flex-col items-center gap-y-10 py-[30px] my-[50px] shadow-lg">
                    <h1>Welcome to ITEL...!</h1>
                    <div className="flex justify-center items-center px-7 py-2 bg-[#af93ff] rounded-[50px] w-1/4">
                        <div className="flex justify-center items-center px-7 py-1 bg-[#875dff] rounded-[20px] ">
                            <span className="text-white">Reset Password</span>
                        </div>
                    </div>
                    <p className="text-center">
                        ITEL is your companion and powerful assistant in
                        <br />
                        the IT industry.
                    </p>
                    <div>
                        <Form
                            onFinish={onFinish}
                            wrapperCol={{ span: 24 }}
                            labelCol={{ span: 24 }}
                        >
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập mật khẩu.",
                                    },
                                    {
                                        pattern: /^.{8,}$/,
                                        message: "Mật khẩu phải có ít nhất 8 ký tự.",
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your Password"
                                    className="rounded-[20px] border-[#794BFF]"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item className="flex justify-end">
                                <Button
                                    className="bg-[#875dff] text-white w-[10rem] h-[40px] rounded-[50px] font-bold"
                                    htmlType="submit"
                                    loading={isSubmitting}
                                >
                                    Confirm
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;
