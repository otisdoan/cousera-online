import calendar from '../../../assets/images/calendar.png';
import group from '../../../assets/images/group.png';
import contact from '../../../assets/images/contact.png';
function Section2() {
    return (
        <>
            <div className="text-center pt-[50px] py-[50px]">
                <h1 className="text-[1.3rem] font-bold flex justify-center gap-x-2 mb-[10px]"><span className="text-[#2f327d]">All-In-One</span><span className="text-[#00cbb8]">Cloud Software.</span></h1>
                <p className="text-[0.8rem] font-light mb-[50px]">
                    ITEL is one powerful online software suite that combines all the tools
                    <br />
                    needed to run a successful school or office.
                </p>
                <div className="flex items-center justify-center gap-x-4">
                    <div className="w-[260px] bg-white rounded-[20px] relative duration-500 transition-transform hover:scale-105">
                        <img src={contact} className='w-[80px] absolute top-[-35px] left-[50%] translate-x-[-50%]' />
                        <h3 className='font-bold mt-[60px] mb-[20px] text-[#2f327d]'>
                            Online Billing,
                            <br />
                            Invoicing
                        </h3>
                        <p className='mb-[40px] opacity-60 text-[0.8rem]'>
                            Simple and secure control of your
                            <br />
                            organization’s financial and legal
                            <br />
                            transactions. Send customized
                            <br />
                            invoices and contracts
                        </p>
                    </div>
                    <div className="w-[260px] bg-white rounded-[20px] relative duration-500 transition-transform hover:scale-105">
                        <img src={calendar} className='w-[80px] absolute top-[-35px] left-[50%] translate-x-[-50%]' />
                        <h3 className='font-bold mt-[60px] mb-[20px] text-[#2f327d]'>
                            Easy Scheduling &
                            <br />
                            Attendance Tracking
                        </h3>
                        <p className='mb-[40px] opacity-60 text-[0.8rem]'>
                            Schedule and reserve classrooms at
                            <br />
                            one campus or multiple campuses.
                            <br />
                            Keep detailed records of student
                            <br />
                            attendance
                        </p>
                    </div>
                    <div className="w-[260px] bg-white rounded-[20px] relative duration-500 transition-transform hover:scale-105">
                        <img src={group} className='w-[80px] absolute top-[-35px] left-[50%] translate-x-[-50%]' />
                        <h3 className='font-bold mt-[60px] mb-[20px] text-[#2f327d]'>
                            Teacher Tracking
                        </h3>
                        <p className='mb-[40px] opacity-60 text-[0.8rem]'>
                            Automate and track emails for
                            <br />
                            individuals or groups. The
                            <br />
                            system will automatically track
                            <br />
                            and suggest other lectures
                            <br />
                            from your favorite teachers.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Section2;