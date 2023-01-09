import React from "react";
import { Avatar, Col } from 'antd';


const ReviewContent = ({ img }) => {
  return (
    <Col md={8} className="pt-5 flex flex-col items-center" xs={24}>
      <div>
        <Avatar src={img} alt="" size={200} />
      </div>
      <div className="h-48 w-48 mt-4 mb-5 bg-[#F0EFEF] rounded"></div>
    </Col>
  );
};

export default ReviewContent