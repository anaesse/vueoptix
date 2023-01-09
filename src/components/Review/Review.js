import { Row } from 'antd';
import { ReviewData } from "./ReviewData";
import ReviewContent from "../Template/ReviewContent";
const Reviews = () => {
    const ReviewCard = ReviewData.map((data) => {
        return <ReviewContent key={data.id} {...data} />;
    });
    return (
        <section className="bg-white w-full ">
            <div className="px-4 sm:px-24 lg:px-28 pt-14">
                <h1 className="text-center text-3xl font-semibold text-[#363636] lead-[54px]">REVIEWS</h1>
                <p className="text-[24px] text-center text-[#363636] lead-[36px] py-2">Here’s what our clients have to say about us;</p>
                <Row gutter={16} className='' >
                    {ReviewCard}
                </Row>
                <div className=" flex items-center justify-center">
                    <button type="button" className="text-white focus:ring-4 focus:outline-none  font-semibold rounded-lg text-[16px] px-5 py-2 mt-8 text-center text-#FFFDFD  bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Coming soon, AR feature and Eyewareness blog...</button>
                </div>
            </div>
        </section>
    );
};

export default Reviews;