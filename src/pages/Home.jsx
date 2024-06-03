import BestSeller from "../components/BestSeller";
import Cta from "../components/CTA";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import NewsLatter from "../components/NewsLatter";
import Partners from "../components/Partners";

const Home = () => {
  return (
    <div>
      <Hero />
      <Highlights />
      <Cta />
      <BestSeller />
      <Partners />
      <NewsLatter />
    </div>
  );
};

export default Home;
