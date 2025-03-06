import { Button, Input } from "antd";
import logo from '../../assets/images/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
function Footer() {
    return (
        <>
            <div className="bg-[#282943] px-[100px] py-[50px] text-white">
                <div className="flex text-[0.9rem] font-light">
                    <div className="w-1/4 flex flex-col items-start gap-y-3 ">
                        <span className="font-bold text-[1rem]">Cousera</span>
                        <span>About Us</span>
                        <span>Why Choose us</span>
                        <span>Pricing</span>
                        <span>Testimonial</span>
                    </div>
                    <div className="w-1/4 flex flex-col items-start gap-y-3">
                        <span className="font-bold text-[1rem]">Comunity</span>
                        <span>Privacy Policy</span>
                        <span>Terms and Condition</span>
                        <span>Blog</span>
                        <span>Contact Us</span>
                    </div>
                    <div className="w-1/4 flex flex-col items-start gap-y-3">
                        <span className="font-bold text-[1rem]">More</span>
                        <span>Project managment</span>
                        <span>Time tracker</span>
                        <span>Time schedule</span>
                        <span>Lead generate</span>
                        <span>Remote Collaboration</span>
                    </div>
                    <div className="w-1/4 flex flex-col items-start gap-y-4">
                        <div className="flex gap-x-[25px]">
                            <img src={logo} className="w-[50px]" />
                            <div className="h-[50px] w-[0.9px] bg-white opacity-50"></div>
                            <span className="text-white font-bold text-[1rem]">
                                Virtual Class
                                <br />
                                for Zoom
                            </span>
                        </div>
                        <span className="font-bold text-[0.9rem]">Subscribe to our Newsletter</span>
                        <Input
                            placeholder="Enter your Email"
                            suffix={
                                <>
                                    <Button className="font-bold text-[1rem] text-white bg-[#49bbbd]">Subscribe</Button>
                                </>
                            }
                            className="rounded-[10px] w-full bg-[#2b2e3c] placeholder-white"
                        />
                    </div>
                </div>
                <div className="mt-[30px] flex items-center justify-between">
                    <span className="text-[0.9rem] font-light">© 2025 ITEL Inc. All rights reserved.</span>
                    <div className="flex items-center gap-x-4 opacity-55">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <BiLogoLinkedinSquare />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;