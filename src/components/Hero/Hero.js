import "../../App.css";
const Hero = () => {
    return (
        <section className="bg-[#5A2047] Hero-session h-[100vh]">
            <div className="bg-white h-[100vh] w-full lg:w-[80%] Hero-container lg:relative">
                <div className="px-4 sm:px-24 lg:px-28 pt-5 lg:pt-28 ">
                    <div className="w-full  lg:w-[50%] lg:h-[48vh]">

                        <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF]  to-[#FF2626]">Welcome</span>
                        <h1 className="text-[28px] sm:text-3xl lead-[60px] py-2">Experience a better vision and a better life with ease</h1>
                        <p className="text-[18px] sm:text-[24px] lg:text-base lead-[36px] break-all py-2">The implication of having your eyes damaged due to exposure to harmful rays emitted from digital devices are enormous. Protect your eyes today</p>
                    </div>
                    <button type="button" className="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF] mb-4 lg:mb-0 ">Get started</button>
                </div>
             

                <div className="flex justify-center lg:absolute lg:top-0 lg:right-0 lg:translate-x-1/3 lg:translate-y-14 Hero-image h-64 md:h-56 lg:w-[420px] lg:h-[450px] mx-auto">
                    <img src="https://res.cloudinary.com/dgts9q1iq/image/upload/v1673205633/VueOptix/optometrist_nxybcb.jpg" alt="people"  style={{ width: '100%', height: "100%", objectFit: "cover" }}  />
                </div>
                <div className="hidden lg:block lg:absolute lg:right-0 lg:bottom-6 lg:-translate-x-60 Hero-image2 ">
                    <div className="flex gap-1">
                        <img src="https://res.cloudinary.com/dgts9q1iq/image/upload/v1673205632/VueOptix/blue_light2_cge6cx.jpg" alt="people" className="h-28" />
                        <img src="https://res.cloudinary.com/dgts9q1iq/image/upload/v1673205632/VueOptix/blue_light2_cge6cx.jpg" alt="people" className="h-28 translate-y-6" />
                        <img src="https://res.cloudinary.com/dgts9q1iq/image/upload/v1673205632/VueOptix/blue_light2_cge6cx.jpg" alt="people" className="h-28" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;