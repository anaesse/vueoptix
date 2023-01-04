import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Reviews from "../components/Review";
import Service from "../components/Service";
import Store from "../components/store";
const Home = () => {


    return (
     <section>
         <Hero/>
         <Service/>
         <Store/>
         <Brand/>
         <Reviews/>
     </section>
    );
  };
  
  export default Home;