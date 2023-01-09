import { Tabs } from "antd";
import Jaguar from "./Jaguar";
import WarbyParker from "./WarbyParker";
import Cartier from "./Cartier";
import TomFord from "./TomFord";
import JimmyChoo from "./JimmyChoo";
import Geek from "./Geek";
import Tommy from "./Tommy";

const Brand = () => {
    return (

        <section className="bg-white h-auto">
            <div className="px-4 sm:px-24 lg:px-28 py-14">
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
                            children: <Jaguar />,
                        },
                        {
                            label: "WARBY PARKER",
                            key: '2',
                            children: <WarbyParker />,
                        },
                        {
                            label: "CARTIER",
                            key: '3',
                            children: <Cartier />,
                        },
                        {
                            label: "TOM FORD",
                            key: '4',
                            children: <TomFord />,
                        },
                        {
                            label: "TOMMY HILFILGER",
                            key: '5',
                            children: <Tommy />,
                        }, {
                            label: "JIMMY CHOO",
                            key: '6',
                            children: <JimmyChoo />,
                        },
                        {
                            label: "GEEK",
                            key: '7',
                            children: <Geek />,
                        },
                    ]}
                />
                {/* </ul> */}
            </div>
        </section>
    );
};

export default Brand;