import React, { Fragment } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledImageBlock = styled.div`
    background-image: url(${({ imag }) => imag});
`;

const random = [0, 2, 3, 4, 5, 6, 7, 8];

function AnimatedImage({ imge }) {
    const [counter, setCounter] = React.useState(1);
    const [hover, setHover] = React.useState(false);

    console.log(random[Math.floor(Math.random() * 7)])

    const texts = imge.map(i => {
        return <Fragment key={i.url}>
            <StyledImageBlock imag={i.url} className="h-60 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center rounded-[10px] ">
                <p class=" h-60 flex items-end justify-center text-[#FFFDFD] font-[800] text-[24px] lead-[36px]">{i.title}</p>
            </StyledImageBlock>
        </Fragment>
    })

    const hoverOn = () => {
        setHover((prev) => !prev);
    };

    const hoverOff = () => {
        setHover((prev) => !prev);
    };

    React.useEffect(() => {
        if (!hover) {
            const timer = setTimeout(() => {
                if (counter === texts.length) {
                    setCounter(1);
                } else {
                    setCounter((prev) => prev + 1);
                }
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [counter, hover, texts.length]);

    return (
        <motion.h1
            onMouseEnter={hoverOn}
            onMouseLeave={hoverOff}
            key={counter}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ duration: random[Math.floor(Math.random() * 7)] }}
        >
            {texts[counter - 1]}
        </motion.h1>
    );
}

export const ImageRegionText = () => (
    <>
        <AnimatedImage />
    </>
);
AnimatedImage.propTypes = {};

export default AnimatedImage;
