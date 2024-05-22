import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Menus from "../../Shared/Menus/Menus";
import UseMenus from "../../UseQuery/UseMenus/UseMenus";

const TodaysOffer = () => {
  const [isLoading, menus]=UseMenus()

  const offer = menus.filter((menu) => menu.category === "offered");
  // console.log(offer);

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
