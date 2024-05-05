const SectionBanner = ({ bannerImg, title, para }) => {
  return (
    <div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
      <div className="bg-black bg-opacity-40 w-2/3 mx-auto text-center text-white py-16 relative bottom-80">
        <h2 className="text-4xl font-serif">{title}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
