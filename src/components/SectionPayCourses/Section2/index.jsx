import { Button, Checkbox, Form, Input } from 'antd';
import p1 from '../../../assets/images/pay21.png';
import p2 from '../../../assets/images/pay22.png';
import p3 from '../../../assets/images/pay23.png';
import p4 from '../../../assets/images/pay24.png';
import p5 from '../../../assets/images/pay25.png';
function Section2() {
    return (
        <>
            <div className="flex py-[50px]">
                <div className="bg-white rounded-[10px] shadow-md w-1/2 p-4">
                    <h2 className="font-bold text-[1.2rem]">Checkout</h2>
                    <span className="text-[0.8rem]">Cart Type</span>
                    <div className="flex items-center gap-x-4 w-[80px] mt-[20px] mb-[40px]">
                        <img src={p1} />
                        <img src={p2} />
                        <img src={p3} />
                        <img src={p4} />
                    </div>
                    <div>
                        <Form
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Form.Item
                                label={'Name on Card'}
                            >
                                <Input placeholder='Enter name on Card' />
                            </Form.Item>
                            <Form.Item
                                label={'Card Number'}
                            >
                                <Input placeholder='Enter Card Number' />
                            </Form.Item>
                            <div className='flex gap-x-4'>
                                <div className='w-1/2'>
                                    <Form.Item
                                        label={'Expiration Date ( MM/YY )'}
                                    >
                                        <Input placeholder='Enter Expiration Date' />
                                    </Form.Item>
                                </div>
                                <div className='w-1/2'>
                                    <Form.Item
                                        label={'CVC'}
                                    >
                                        <Input placeholder='Enter CVC' />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className='mt-[-15px] opacity-35'>
                                <Checkbox>Save my information for faster checkout</Checkbox>
                            </div>
                            <Form.Item className='mt-[25px]'>
                                <Button className='bg-[#49bbbd] font-bold text-white w-full h-[40px]'>Confirm Payment</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className='w-1/2 bg-[#e3edf7] rounded-[10px] p-8 ml-[30px]'>
                    <h2 className='text-[1.2rem] font-bold mb-[50px]'>Summary</h2>
                    <div className='flex items-center'>
                        <div className='w-1/3'>
                            <img src={p5} />
                        </div>
                        <div className='w-2/3'>
                            <h3 className='font-medium'>adipising elit, sed do eiusmod tempor</h3>
                            <p className='opacity-40'>Lorem ipsum dollar...</p>
                            <span className='text-[1.2rem] font-semibold'>$24.69</span>
                        </div>
                    </div>
                    <div className='w-full h-[1px] border-t-[1px] border-t-black my-[20px] opacity-30'></div>
                    <div className='flex items-center'>
                        <div className='w-1/3'>
                            <img src={p5} />
                        </div>
                        <div className='w-2/3'>
                            <h3 className='font-medium'>adipising elit, sed do eiusmod tempor</h3>
                            <p className='opacity-40'>Lorem ipsum dollar...</p>
                            <span className='text-[1.2rem] font-semibold'>$24.69</span>
                        </div>
                    </div>
                    <div className='w-full h-[1px] border-t-[1px] border-t-black my-[20px] opacity-30'></div>
                    <div className='flex items-center justify-between font-bold opacity-60'>
                        <span>Subtotal</span>
                        <span>$51.38</span>
                    </div>
                    <div className='w-full h-[1px] border-t-[1px] border-t-black my-[20px] opacity-30'></div>
                    <div className='flex items-center justify-between font-bold opacity-60'>
                        <span>Coupon Discount</span>
                        <span>0 %</span>
                    </div>
                    <div className='w-full h-[1px] border-t-[1px] border-t-black my-[20px] opacity-30'></div>
                    <div className='flex items-center justify-between font-bold opacity-60'>
                        <span>TAX</span>
                        <span>5</span>
                    </div>
                    <div className='w-full h-[1px] border-t-[1px] border-t-black my-[20px] opacity-30'></div>
                    <div className='flex items-center justify-between font-bold '>
                        <span>Total</span>
                        <span>$56.38</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section2;