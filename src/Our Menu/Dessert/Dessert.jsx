import { useEffect, useState } from "react";
import SectionBanner from "../../Shared/Section Banner/SectionBanner";
import img from "../../assets/home/chef-service.jpg";
import Menus from "../../Shared/Menus/Menus";
import { Link } from "react-router-dom";

const Dessert = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  // console.log(menu);

  const dessert = menu.filter((menu) => menu.category === "dessert");
  console.log(dessert);

  return (
    <div className="mt-16">
      <div>
        <SectionBanner
          bannerImg={img}
          title={"DESSERT"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionBanner>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 w-2/3 mx-auto -mt-40 mb-16">
        {dessert.map((menu) => (
          <Menus
            key={menu._id}
            image={menu.image}
            name={menu.name}
            recipe={menu.recipe}
            price={menu.price}
          ></Menus>
        ))}
      </div>
      <div className="text-center pb-16">
        <Link to="/ourShop">
          <button className="btn border-yellow-600">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Dessert;
