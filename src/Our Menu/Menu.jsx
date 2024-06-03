import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import TodaysOffer from "./Today's Offer/TodaysOffer";
import Dessert from "./Dessert/Dessert";
import Pizza from "./Pizza/Pizza";
import Soups from "./Soups/Soups";
import Salads from "./Salads/Salads";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu || Bistro Boss</title>
      </Helmet>
      <Banner></Banner>
      <TodaysOffer></TodaysOffer>
      <Dessert></Dessert>
      <Pizza></Pizza>
      <Salads></Salads>
      <Soups></Soups>
    </div>
  );
};

export default Menu;
