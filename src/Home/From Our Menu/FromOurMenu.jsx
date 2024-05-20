import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./FromOurMenu.css";
import image from "../../assets/home/featured.jpg";

const FromOurMenu = () => {
  return (
    <div className="from-our-menu pt-10 mt-20 text-white px-40 pb-20">
      <div className="">
        <SectionTitle
          subtitle={"---Check it out---"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
      </div>

      <div className="flex justify-around items-center">
        <div>
          <img className="w-96" src={image} alt="" />
        </div>
        <div className="w-96 text-yellow-600">
          <div className="text-2xl font-serif">
            <h2>March 20, 2023</h2>
            <h2>WHERE CAN I GET SOME?</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div>
            <button className="mt-3 btn uppercase border-amber-700 text-yellow-600">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
