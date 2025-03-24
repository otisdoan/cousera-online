import { Button, Checkbox, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase";

function LoginForm() {
    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();
    const onFinish = async (values) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword(values);
            if (!error) {
                const userEmail = data?.user?.email;
                localStorage.setItem('access_token', data?.session?.access_token);
                localStorage.setItem('refresh_token', data?.session?.refresh_token);
                localStorage.setItem('email', userEmail);
                localStorage.setItem('idUser', data?.user?.id);

                const { data: name, error: fetchName } = await supabase
                    .from('profiles')
                    .select('name')
                    .eq('email', userEmail)


                if (!fetchName) {
                    console.log(name);
                }

                const { data: existingProfile, error: fetchError } = await supabase
                    .from('profiles')
                    .select('email')
                    .eq('email', userEmail)
                    .single();

                if (fetchError) {
                    console.error('Lỗi khi kiểm tra email:', fetchError.message);
                }

                if (!existingProfile) {
                    const { error: insertError } = await supabase
                        .from('profiles')
                        .insert({ email: userEmail });

                    if (insertError) {
                        console.error('Lỗi khi thêm email vào profiles:', insertError.message);
                    }
                }

                api['success']({
                    message: 'Thành công!',
                    description: 'Bạn đã đăng nhập thành công. Chào mừng bạn!',
                    duration: 2,
                    placement: 'topRight',
                });

                setTimeout(() => {
                    if (name && name.length > 0 && name[0].name) {
                        navigate('/courses');
                    } else {
                        navigate('/courses/profiles');
                    }
                }, 2000);

            } else {
                api['error']({
                    message: 'Đăng nhập thất bại!',
                    description: error.message || 'Tài khoản chưa đăng ký.',
                    duration: 3,
                    placement: 'topRight',
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {contextHolder}
            <div className="w-full">
                <h2 className="font-semibold text-center mb-[20px]">Welcome to ITEL...!</h2>
                <div className="flex justify-center mb-[50px]">
                    <div className="flex items-center gap-x-2 justify-between bg-[#875DFF99] rounded-[20px] py-[7px] px-[5px] w-[300px]">
                        <div className="bg-[#794BFF] text-white text-[0.9rem] rounded-[20px] w-[150px] flex items-center justify-center py-[3px]">
                            <Link to='/login'>Sign In</Link>
                        </div>
                        <div className="text-white text-[0.9rem] rounded-[20px] w-[150px] flex items-center justify-center py-[3px]">
                            <Link to='/register'>Sign Up</Link>
                        </div>
                    </div>
                </div>
                <p className="text-center opacity-55 mb-[20px]">
                    ITEL is your companion and powerful assistant in
                    <br />
                    the IT industry.
                </p>
                <Form
                    onFinish={onFinish}
                    labelCol={{
                        span: 24
                    }}
                    wrapperCol={{
                        span: 24
                    }}
                >
                    <Form.Item
                        label={'Email Address'}
                        name={'email'}
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập email."
                            },
                            {
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email không hợp lệ.'
                            }
                        ]}
                    >
                        <Input type="email" placeholder="Enter your Email Address" className="rounded-[20px] border-[#794BFF]" size="large" />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name={'password'}
                        rules={[
                            {
                                required: true,
                                message: 'Vui lòng nhập mật khẩu.'
                            },
                            {
                                pattern: /^.{8,}$/,
                                message: 'Mật khẩu phải có ít nhất 8 ký tự.'
                            }
                        ]}
                    >
                        <Input.Password placeholder="Enter your Password" className="rounded-[20px] border-[#794BFF]" size="large" />
                    </Form.Item>
                    <Form.Item className="mb-[50px]">
                        <div className="flex items-center justify-between">
                            <Checkbox className="text-[0.8rem]">Remember me</Checkbox>
                            <Link to='/forgot-password' className="text-[0.8rem]">Forgot Password ?</Link>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className="flex justify-end">
                            <Button className="rounded-[20px] text-white bg-[#794BFF] w-[200px] h-[35px]" htmlType="submit">Sign In</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default LoginForm;