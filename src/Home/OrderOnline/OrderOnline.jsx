import "./OrderOnline.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import swiperImg1 from "../../assets/home/slide1.jpg";
import swiperImg2 from "../../assets/home/slide2.jpg";
import swiperImg3 from "../../assets/home/slide3.jpg";
import swiperImg4 from "../../assets/home/slide4.jpg";
import swiperImg5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OrderOnline = () => {
  return (
    <div>
      <SectionTitle
        subtitle={"---From 11:00am to 10:00pm---"}
        title={"ORDER ONLINE"}
      ></SectionTitle>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={swiperImg1} alt="" />
            <h3 className="text-2xl uppercase font-serif">Salads</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImg2} alt="" />
            <h3 className="text-2xl uppercase font-serif">Soups</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImg3} alt="" />
            <h3 className="text-2xl uppercase font-serif">pizzas</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImg4} alt="" />
            <h3 className="text-2xl uppercase font-serif">desserts</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiperImg5} alt="" />
            <h3 className="text-2xl uppercase font-serif">Salad</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
