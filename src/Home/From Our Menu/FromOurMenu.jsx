import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "./FromOurMenu.css";
import image from "../../assets/home/featured.jpg";

const FromOurMenu = () => {
  return (
    <div className="from-our-menu lg:pt-10 pt-4 lg:mt-20 mt-10 text-white lg:px-40 px-12 pb-8 lg:pb-20">
      <div className="">
        <SectionTitle
          subtitle={"---Check it out---"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
      </div>

      <div className="lg:flex justify-around items-center">
        <div>
          <img className="w-96" src={image} alt="" />
        </div>
        <div className="w-96 text-yellow-600">
          <div className="lg:text-2xl text-xl font-serif lg:my-0 my-2">
            <h2>March 20, 2023</h2>
            <h2>WHERE CAN I GET SOME?</h2>
          </div>
          <p className="lg:pe-0 pe-20">
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
