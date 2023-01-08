import Brand from "../components/Brand/Brand";
import Hero from "../components/Hero/Hero";
import Reviews from "../components/Review/Review";
import Service from "../components/Services/Service";
import Store from "../components/Store/store";
const Home = () => {


    return (
        <section>
            <Hero />
            <Service />
            <Store />
            <Brand />
            <Reviews />
        </section>
    );
};

export default Home;