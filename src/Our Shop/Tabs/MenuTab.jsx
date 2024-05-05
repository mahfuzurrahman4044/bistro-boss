const MenuTab = ({ item }) => {
  const { image, name, recipe } = item;
  return (
    <div>
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
  );
};

export default MenuTab;
