import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Menus from "../../Shared/Menus/Menus";

const TodaysOffer = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  //   console.log(menu);

  const offer = menu.filter((menu) => menu.category === "offered");
  console.log(offer);

  return (
    <div>
      <div className="-mt-44">
        <SectionTitle
          subtitle={"---Don't miss---"}
          title={"TODAY'S OFFER"}
        ></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 w-2/3 mx-auto">
        {offer.map((menu) => (
          <Menus
            key={menu._id}
            image={menu.image}
            name={menu.name}
            recipe={menu.recipe}
            price={menu.price}
          ></Menus>
        ))}
      </div>
    </div>
  );
};

export default TodaysOffer;
