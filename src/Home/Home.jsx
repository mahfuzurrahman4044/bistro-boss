import Banner from "./Banner/Banner";
import ChefRecommends from "./Chef Recommends/ChefRecommends";
import PopularMenu from "./Popular Menu/PopularMenu";
import Poster from "./Poster/Poster";
import FromOurMenu from "./From Our Menu/FromOurMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet";
import Contact from "./Contact/Contact";
import OrderOnline from "./OrderOnline/OrderOnline";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss</title>{" "}
      </Helmet>
      <Banner></Banner>
      <OrderOnline></OrderOnline>
      <Poster></Poster>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <ChefRecommends></ChefRecommends>
      <FromOurMenu></FromOurMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
