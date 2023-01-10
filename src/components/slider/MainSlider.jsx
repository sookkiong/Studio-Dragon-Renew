import Slider from "react-slick";
import styled from "styled-components";
import { MainSliderItem } from "../Main";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";

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
        zIndex: "5",
        marginRight: "15%",
      }}
    >
      <MainSlideStyle {...settings}>
        {MainSliderItem.map((slide) => {
          return (
            <div key={slide.id}>
              <img src={slide.img} alt="슬라이드 이미지" width="100%" />
            </div>
          );
        })}
      </MainSlideStyle>
    </div>
  );
};
export default MainSlider;

const MainSlideStyle = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 75%;
    left: 0;

    display: block;

    width: 32px;
    height: 32px;
    padding: 0;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);

    cursor: pointer;

    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    z-index: 5;
  }
  .slick-prev {
    left: 80%;
    background: url("/img/prev.png") no-repeat center center;
    background-size: contain;
  }
  .slick-next {
    left: 90%;
    background: url("/img/next.png") no-repeat center center;
    background-size: contain;
  }
`;
