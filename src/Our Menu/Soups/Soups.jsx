import SectionBanner from "../../Shared/Section Banner/SectionBanner";
import img from "../../assets/home/chef-service.jpg";
import Menus from "../../Shared/Menus/Menus";
import UseMenus from "../../UseQuery/UseMenus/UseMenus";

const Soups = () => {
  const [isLoading, menus] = UseMenus()

  console.log(menus);

  const soup = menus.filter((menu) => menu.category === "soup");
  console.log(soup);
  return (
    <div className="mt-16">
      <div>
        <SectionBanner
          bannerImg={img}
          title={"SOUPS"}
          para={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionBanner>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 w-2/3 mx-auto -mt-40 mb-16">
        {soup.map((menu) => (
          <Menus
            key={menu._id}
            image={menu.image}
            name={menu.name}
            recipe={menu.recipe}
            price={menu.price}
          ></Menus>
        ))}
      </div>
      {/* <div className="text-center">
        <button className="btn border-amber-700 ">Order Now</button>
      </div> */}
    </div>
  );
};

export default Soups;
