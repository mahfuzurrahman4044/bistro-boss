import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabItems from "./TabItems";
import UseMenus from "../../UseQuery/UseMenus/UseMenus";

const OrderTabs = () => {
  const [isLoading, menus] = UseMenus([]);

  const salad = menus.filter((item) => item.category === "salad");
  const soup = menus.filter((item) => item.category === "soup");
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const drinks = menus.filter((item) => item.category === "drinks");

  return (
    <div className="ps-16 -mt-32">
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERT</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {salad.map((item) => (
              <TabItems key={item._id} item={item}></TabItems>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {pizza.map((item) => (
              <TabItems key={item._id} item={item}></TabItems>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {soup.map((item) => (
              <TabItems key={item._id} item={item}></TabItems>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {dessert.map((item) => (
              <TabItems key={item._id} item={item}></TabItems>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
            {drinks.map((item) => (
              <TabItems key={item._id} item={item}></TabItems>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderTabs;
