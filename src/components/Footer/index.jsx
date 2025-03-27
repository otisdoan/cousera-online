import { Button, Input } from "antd";
import logo from '../../assets/images/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";

function Footer() {
    return (
        <div className="bg-[#282943] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-[150px] py-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Links */}
                <div className="flex flex-col items-start gap-y-3">
                    <span className="font-bold text-lg">Cousera</span>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">About Us</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Why Choose us</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Pricing</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Testimonial</a>
                    </div>
                </div>

                {/* Community Links */}
                <div className="flex flex-col items-start gap-y-3">
                    <span className="font-bold text-lg">Community</span>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Privacy Policy</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Terms and Condition</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Blog</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Contact Us</a>
                    </div>
                </div>

                {/* More Links */}
                <div className="flex flex-col items-start gap-y-3">
                    <span className="font-bold text-lg">More</span>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Project Management</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Time Tracker</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Time Schedule</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Lead Generate</a>
                        <a href="#" className="text-sm hover:text-[#49bbbd] transition-colors">Remote Collaboration</a>
                    </div>
                </div>

                {/* Newsletter and Logo Section */}
                <div className="flex flex-col items-start gap-y-4">
                    <div className="flex items-center gap-x-4">
                        <img 
                            src={logo} 
                            alt="Virtual Class Logo" 
                            className="w-12 h-12 object-contain" 
                        />
                        <div className="h-8 w-[1px] bg-white opacity-50"></div>
                        <span className="text-white font-bold text-base leading-tight">
                            Virtual Class
                            <br />
                            for Zoom
                        </span>
                    </div>
                    
                    <div className="w-full">
                        <span className="block mb-2 font-bold text-sm">Subscribe to our Newsletter</span>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                placeholder="Enter your Email"
                                className="rounded-[10px] w-full bg-[#2b2e3c] text-white"
                            />
                            <Button 
                                className="font-bold text-white bg-[#49bbbd] hover:bg-[#3aa2a5] transition-colors w-full sm:w-auto"
                            >
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright and Social Icons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between">
                <span className="text-sm font-light mb-4 sm:mb-0 text-center sm:text-left">
                    © 2025 ITEL Inc. All rights reserved.
                </span>
                <div className="flex items-center gap-x-4 opacity-75">
                    <a href="#" className="hover:text-[#49bbbd] transition-colors"><FaFacebook size={20} /></a>
                    <a href="#" className="hover:text-[#49bbbd] transition-colors"><FaTwitter size={20} /></a>
                    <a href="#" className="hover:text-[#49bbbd] transition-colors"><FaInstagram size={20} /></a>
                    <a href="#" className="hover:text-[#49bbbd] transition-colors"><BiLogoLinkedinSquare size={20} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;