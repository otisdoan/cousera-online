import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

function RegisterForm() {
    const onFinish = () => {

    }
    return (
        <>
            <div className="w-full">
                <h2 className="font-semibold text-center mb-[20px]">Welcome to ITEL...!</h2>
                <div className="flex justify-center mb-[50px]">
                    <div className="flex items-center gap-x-2 justify-between bg-[#875DFF99] rounded-[20px] py-[7px] px-[5px] w-[300px]">
                        <div className="text-white text-[0.9rem] rounded-[20px] w-[150px] flex items-center justify-center py-[3px]">
                            <Link to='/login'>Sign In</Link>
                        </div>
                        <div className="bg-[#794BFF] text-white text-[0.9rem] rounded-[20px] w-[150px] flex items-center justify-center py-[3px]">
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

                        ]}
                    >
                        <Input type="email" placeholder="Enter your Email Address" className="rounded-[20px] border-[#794BFF]" />
                    </Form.Item>
                    <Form.Item
                        label='Username'
                        name={'username'}
                        rules={[

                        ]}
                    >
                        <Input placeholder="Enter your Username" className="rounded-[20px] border-[#794BFF]" />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name={'password'}
                        rules={[

                        ]}
                    >
                        <Input.Password placeholder="Enter your Password" className="rounded-[20px] border-[#794BFF]" />
                    </Form.Item>
                    <Form.Item className="mt-[60px]">
                        <div className="flex justify-end">
                            <Button className="rounded-[20px] text-white bg-[#794BFF] w-[200px] h-[35px]">Sign Up</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default RegisterForm;