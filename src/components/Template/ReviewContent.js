import React from "react";
import { Col } from 'antd';


const ReviewContent = ({img}) => {
  return (
        <Col className="pt-5" xs={24}>
        <img class="rounded-full h-52 w-52" src={img} alt=""/>
        <div class="h-48 w-48 mt-4 mb-5 bg-[#F0EFEF] rounded"></div>
        </Col>
  );
};

export default ReviewContent