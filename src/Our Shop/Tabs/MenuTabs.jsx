import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MenuTab from "./MenuTab";

const MenuTabs = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

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
              <MenuTab key={item._id} item={item}></MenuTab>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {pizza.map((item) => (
              <MenuTab key={item._id} item={item}></MenuTab>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {soup.map((item) => (
              <MenuTab key={item._id} item={item}></MenuTab>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-4">
            {dessert.map((item) => (
              <MenuTab key={item._id} item={item}></MenuTab>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-4">
            {drinks.map((item) => (
              <MenuTab key={item._id} item={item}></MenuTab>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MenuTabs;
