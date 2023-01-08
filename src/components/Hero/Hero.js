const Hero = () => {
    return (
        <section className="bg-[#5A2047] h-[82vh]">
            <div className="bg-white h-[82vh] w-[80%]">
                <div className="px-4 sm:px-24 lg:px-28 pt-28 ">
                    <div className="w-[50%] h-[48vh]">

                        <span className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0A27BF]  to-[#FF2626]">Welcome</span>
                        <h1 className="text-3xl lead-[60px] py-2">Experience a better vision and a better life with ease</h1>
                        <p className="text-base lead-[36px] break-all py-2">The implication of having your eyes damaged due to exposure to harmful rays emitted from digital devices are enormous. Protect your eyes today</p>
                    </div>
                    <button type="button" class="text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-#FFFDFD mr-3 md:mr-0 bg-gradient-to-t from-[#FF2626] to-[#0A27BF]">Get started</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;