import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import { useParams } from "react-router-dom";
import OrderTabs from "./Tabs/OrderTabs";

const Order = () => {
  const { category } = useParams();
  console.log(category);
  return (
    <div>
      <Helmet>
        <title>Order || Bistro Boss</title>
      </Helmet>
      <Banner></Banner>
      <OrderTabs></OrderTabs>
    </div>
  );
};

export default Order;
