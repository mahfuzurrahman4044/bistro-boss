import bannerImg from "../../assets/shop/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
      <div className="bg-black bg-opacity-40 w-2/3 mx-auto text-center text-white py-16 relative bottom-96">
        <h2 className="text-4xl font-serif">OUR SHOP</h2>
        <p>WOULD YOU LIKE TO TRY A DISH?</p>
      </div>
      {/* <SectionBanner
        bannerImg={bannerImg}
        title={"OUR MENU"}
        para={"WOULD YOU LIKE TO TRY A DISH?"}
      ></SectionBanner> */}
    </div>
  );
};

export default Banner;
