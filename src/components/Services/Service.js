import { Col, Row } from 'antd';
import React from 'react';
import ServiceContent from '../Template/ServiceContent';
import { ServicesData } from './ServiceData';

const Service = () => {
    const serviceList = React.Children.toArray(ServicesData.map((data) => {
        return <Col span={8} xs={24} md={8}><ServiceContent url={data.img} desc={data.description} title={data.title} store={true} imgArr={data.imgArr} /></Col>
    }))
    return (
        <section className="bg-[#F0EFEF]">
            <div className="px-4 sm:px-24 lg:px-28 py-14 ">
                <h1 className="text-center text-[24px] sm:text-3xl font-semibold text-[#363636] lead-[54px] pt-8 sm:pt-24">Services</h1>
                <p className="text-[16px] sm:text-[24px] text-[#363636] lead-[36px] py-2">At VueOptix, we place utmost priority  on giving you a healthy vision with ease. Below are some of the services we offer; </p>
                <Row gutter={16} style={{ margin: 'auto' }}>
                    {serviceList}
                </Row>
            </div>
        </section>
    );
};

export default Service;