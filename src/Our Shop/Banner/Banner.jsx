import bannerImg from "../../assets/shop/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="banner-img">
        <img src={bannerImg} alt="" />
      </div>
      <div className="bg-black bg-opacity-40 w-2/3 mx-auto text-center text-white py-16 relative bottom-96">
        <h2 className="text-4xl font-serif">OUR SHOP</h2>
        <p>WOULD YOU LIKE TO TRY A DISH?</p>
      </div>
    </div>
  );
};

export default Banner;
