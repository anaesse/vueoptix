import { Tabs } from "antd";

const Brand = () => {
    return (

        <section className="bg-white h-[100vh]">
            <div className="px-4 sm:px-24 lg:px-28 pt-14">
                <h1 className="text-center text-3xl font-semibold text-[#363636] lead-[54px]">SHOP BY BRAND</h1>
                {/* <ul className="text-xl text-[#363636] lead-[36px] py-4 flex items-center justify-between"> */}
                {/* "JAGUAR</li>
                    "WARBY PARKER</li>
                    "CARTIER</li>
                    "TOM FORD</li>
                    "TOMMY HILFILGER</li>
                    "JIMMY CHOO</li>
                    "GEEK</li> */}
                <Tabs
                    centered
                    defaultActiveKey="1"
                    items={[
                        {
                            label: "JAGUAR",
                            key: '1',
                            children: 'Tab 1',
                        },
                        {
                            label: "WARBY PARKER",
                            key: '2',
                            children: 'Tab 2',
                        },
                        {
                            label: "CARTIER",
                            key: '3',
                            children: 'Tab 3',
                        },
                        {
                            label: "TOM FORD",
                            key: '4',
                            children: 'Tab 4',
                        },
                        {
                            label: "TOMMY HILFILGER",
                            key: '5',
                            children: 'Tab 5',
                        }, {
                            label: "JIMMY CHOO",
                            key: '6',
                            children: 'Tab 6',
                        },
                        {
                            label: "GEEK",
                            key: '7',
                            children: 'Tab 7',
                        },
                    ]}
                />
                {/* </ul> */}
            </div>
        </section>
    );
};

export default Brand;