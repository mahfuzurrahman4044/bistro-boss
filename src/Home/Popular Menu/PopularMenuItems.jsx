const PopularMenuItems = ({ item }) => {
  // console.log(item);
  const { name, image, price, recipe } = item;
  return (
    <div className="flex justify-around items-center">
      <div>
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <h2 className="uppercase text-2xl font-serif">{name}-----</h2>
        <p>{recipe}</p>
      </div>
      <div className="text-2xl font-serif text-yellow-600">${price}</div>
    </div>
  );
};

export default PopularMenuItems;
