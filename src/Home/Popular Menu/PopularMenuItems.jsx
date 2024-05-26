const PopularMenuItems = ({ item }) => {
  // console.log(item);
  const { name, image, price, recipe } = item;
  return (
    <div className="lg:flex justify-around items-center lg:px-0 px-20">
      <div className="lg:px-0 px-10">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <h2 className="uppercase lg:text-2xl text-xl font-serif">{name}-----</h2>
        <p>{recipe}</p>
      </div>
      <div className="lg:text-2xl text-xl font-serif text-yellow-600">${price}</div>
    </div>
  );
};

export default PopularMenuItems;
