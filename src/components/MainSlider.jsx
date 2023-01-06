import Slider from "react-slick";
import { MainSliderItem } from "./Main";
import "../slick/slick.css";
import "../slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: false,
  };
  return (
    <div
      style={{
        overflow: "hidden",
        width: "60%",
        height: "65%",
        zIndex: "50",
        marginRight: "15%",
      }}
    >
      <Slider {...settings}>
        {MainSliderItem.map((slide) => {
          return (
            <div key={slide.id}>
              <img src={slide.img} alt="슬라이드 이미지" width="100%" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default MainSlider;
