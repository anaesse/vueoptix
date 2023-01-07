import { Col, Row } from 'antd';
import React from 'react';
import ServiceContent from '../Template/ServiceContent';
import { StoreData } from './StoreData';

const Store = () => {
    const storeist = React.Children.toArray(StoreData.map((data) => {
        return <Col span={8} xs={24} md={8}><ServiceContent url={data.img} desc={data.description} title={data.title} price={data.price} store={false} imgArr={data.imgArr} /></Col>
    }))
    return (
        <section className="bg-white ">
            <div className="px-4 sm:px-24 lg:px-28 pt-14">
                <h1 className="text-center text-3xl font-semibold text-[#363636] lead-[54px]">ONLINE STORE</h1>
                {/* <div class="w-80 bg-white border border-transparent  cursor-pointer my-5"> */}
                <Row gutter={16}>
                    {storeist}
                </Row>
                {/* </div> */}
                <div className="flex py-5 items-center justify-center">
                    <button type="button" class="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Visit Store</button>
                </div>
            </div>
        </section>
    );
};

export default Store;