import p1 from '../../../assets/images/process1.png';
function Section1() {
    return (
        <>
            <div className='pt-[10px] relative pb-[20px]'>
                <img src={p1} className='w-[950px]'/>
                <p className='text-[2rem] font-bold absolute top-12 left-12'>
                    Develop your skills with
                    <br />
                    online courses
                </p>
            </div>
        </>
    )
}
export default Section1;