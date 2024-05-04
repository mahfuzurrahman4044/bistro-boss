import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItems from "./MenuItems";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  //   console.log(menu);

  const popularMenu = menu.filter((menu) => menu.category === "popular");
  //   console.log(popularMenu);

  return (
    <div>
      <div className="-mt-64">
        <SectionTitle
          subtitle={"---Check it out---"}
          title={"POPULAR MENU"}
        ></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 w-2/3 mx-auto">
        {popularMenu.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
