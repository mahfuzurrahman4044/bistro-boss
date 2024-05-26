const Menus = ({ image, name, recipe, price }) => {
  return (
    <div>
      <div className="lg:flex justify-around items-center">
        <div>
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            src={image}
            alt=""
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="uppercase text-xl lg:text-2xl font-serif">{name}-----</h2>
          <p>{recipe}</p>
        </div>
        <div className="text-xl lg:text-2xl text-center font-serif text-yellow-600">${price}</div>
      </div>
    </div>
  );
};

export default Menus;
