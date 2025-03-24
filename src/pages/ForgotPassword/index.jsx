import { Button, Form, Input, notification } from "antd";
import { supabase } from "../../supabase";

function ForgotPassword() {
    const [api, contextHolder] = notification.useNotification();
    const onFinish = async ({ email }) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:5173/reset-password',
        });

        if (error) {
            api['error']({
                message: 'Thất bại!',
                description: 'Gửi yêu cầu thất bại. Vui lòng thử lại!',
                duration: 2,
                placement: 'topRight',
            });            
        } else {
            api['success']({
                message: 'Thành công!',
                description: 'Yêu cầu đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra email!',
                duration: 5,
                placement: 'topRight',
            });
        }
    };

    return (
        <>
            {contextHolder}
            <div className="px-[150px]">
                <div className="bg-white rounded-lg flex flex-col items-center gap-y-10 py-[30px] my-[50px] shadow-lg">
                    <h1>Welcome to ITEL...!</h1>
                    <div className="flex justify-center items-center px-7 py-2 bg-[#af93ff] rounded-[50px] w-1/4">
                        <div className="flex justify-center items-center px-7 py-1 bg-[#875dff] rounded-[20px] ">
                            <span className="text-white">Forgot Password</span>
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
                                label="Email Address"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng nhập email.",
                                    },
                                    {
                                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Email không hợp lệ.",
                                    },
                                ]}
                            >
                                <Input
                                    type="email"
                                    placeholder="Enter your Email Address"
                                    className="rounded-[20px] border-[#794BFF]"
                                    size="large"
                                />
                            </Form.Item>
                            <Form.Item className="flex justify-end">
                                <Button
                                    className="bg-[#875dff] text-white w-[10rem] h-[40px] rounded-[50px]"
                                    htmlType="submit"
                                >
                                    Send
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ForgotPassword;
