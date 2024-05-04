import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ChefRecommends = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  //   console.log(menu);

  const chefRecommends = menu.filter((menu) => menu?.recommend === "yes");
  console.log(chefRecommends);
  return (
    <div>
      <div>
        <SectionTitle
          subtitle={"---Should Try---"}
          title={"CHEF RECOMMENDS"}
        ></SectionTitle>
      </div>

      <div className="flex justify-around items-center">
        {chefRecommends.map((item) => (
          <div key={item._id}>
            <div className="card w-80 bg-base-100 shadow-2xl rounded-none text-center">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl text-center">{item.name}</h2>
                <p>{item.recipe}</p>
                <button className="uppercase btn btn-ghost border-amber-700 text-yellow-600">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommends;
