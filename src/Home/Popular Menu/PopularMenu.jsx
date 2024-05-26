import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import UseMenus from "../../UseQuery/Use Menus/UseMenus";
import MenuItems from "./PopularMenuItems";

const PopularMenu = () => {
  const [isLoading, menus] = UseMenus();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const popularMenus = menus.filter((menu) => menu.category === "popular");
  // console.log(popularMenus);

  return (
    <div>
      <div className="-mt-64">
        <SectionTitle
          subtitle={"---Check it out---"}
          title={"POPULAR MENU"}
        ></SectionTitle>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-6 lg:w-2/3 mx-auto">
        {popularMenus.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
