import { Col } from 'antd';
import React from 'react';
import AnimatedImage from './AnimateImage';


const Card = ({ store, url, title, desc, price, imgArr }) => {
    return (
        <Col class="w-80 border border-transparent my-8 cursor-pointer" xs={24}>
            <AnimatedImage imge={imgArr} />
            {store ? <div class="py-1 my-4 bg-[#5A2047] rounded-[10px]">
                <p class="text-[#FFFDFD] text-[20px] font-medium lead-[30px] px-2">{desc}</p>
            </div> :
                <div class="py-5">
                    <p class="text-[#363636] text-[20px] font-semibold py-2">{desc}</p>
                    <span class=" text-[24px] lead-[36px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF] to-[#FF2626] ">{price}</span>
                </div>
            }
        </Col>
    )
}

export default Card