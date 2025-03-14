import { ConfigProvider, Tabs } from "antd";
import { useState } from "react";
import ContentOnGoing from "../ContentOnGoing";
import ConntentComplete from "../ContentCompleted";

function Section2() {
    const [activeComplete, setActiveComplete] = useState(false);
    const [activeGoing, setActiveGoing] = useState(true);
    const handleComplete = () => {
        setActiveComplete(true);
        setActiveGoing(false);
    }
    const handleGoing = () => {
        setActiveGoing(true);
        setActiveComplete(false);
    }
    const items = [
        {
            key: '1',
            label: (
                <div className={`font-bold mr-[40px] px-[50px] py-[10px] rounded-[10px] ${activeGoing ? `bg-[#49bbbd]` : `bg-white`}`} onClick={handleGoing}>
                    <span>On Going</span>
                </div>
            ),
            children: <ContentOnGoing />
        },
        {
            key: '2',
            label: (
                <div className={`font-bold px-[50px] py-[10px] rounded-[10px] ${activeComplete ? `bg-[#49bbbd]` : `bg-white`}`} onClick={handleComplete}>
                    <span>Completed</span>
                </div>
            ),
            children: <ConntentComplete />,
        }
    ]
    return (
        <>
            <div>
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                itemSelectedColor: 'white',
                                itemActiveColor: 'black',
                                itemHoverColor: 'black',
                                inkBarColor: '#f7f5fa'
                            },
                        },
                    }}
                >
                    <Tabs defaultActiveKey="1" items={items} />
                </ConfigProvider>
            </div>
        </>
    )
}
export default Section2;