import Banner from "./Banner/Banner";
import ChefRecommends from "./Chef Recommends/ChefRecommends";
import ContactBanner from "./Contact Banner/ContactBanner";
import PopularMenu from "./Popular Menu/PopularMenu";
import Order from "./Order/Order";
import Poster from "./Poster/Poster";
import FromOurMenu from "./From Our Menu/FromOurMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant</title>{" "}
      </Helmet>
      <Banner></Banner>
      <Order></Order>
      <Poster></Poster>
      <PopularMenu></PopularMenu>
      <ContactBanner></ContactBanner>
      <ChefRecommends></ChefRecommends>
      <FromOurMenu></FromOurMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
