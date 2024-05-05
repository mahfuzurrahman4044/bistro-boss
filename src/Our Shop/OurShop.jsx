import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import MenuTabs from "./Tabs/MenuTabs";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <Helmet>
        <title>Our Shop || Bistro Boss Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <MenuTabs></MenuTabs>
    </div>
  );
};

export default OurShop;
