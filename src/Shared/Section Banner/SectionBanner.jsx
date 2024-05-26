import "./SectionBanner.css"

const SectionBanner = ({ bannerImg, title, para }) => {
  return (
    <div className="mx-auto lg:my-20 lg:w-2/3">
      <div className="poster-img img">
        <img src={bannerImg} alt="" />
      </div>
      <div className="bg-white lg:w-1/2 w-2/3 mx-auto lg:p-10 p-4 text-center relative bottom-64">
        <h2 className="lg:text-4xl text-2xl font-serif">{title}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
