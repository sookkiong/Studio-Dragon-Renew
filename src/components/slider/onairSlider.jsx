import Slider from "react-slick";
import { Works } from "../Contents";
import styled from "styled-components";
import { useNavigate } from "react-router";
import "../../slick/slick.css";
import "../../slick/slick-theme.css";

const OnairSlider = () => {
  const navigate = useNavigate();
  const items = Works.filter((element) => element.onAir === "방영 중");

  const settings = {
    dots: false,
    /* infinite: true, */
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    /* autoplay: true,
    autoplaySpeed: 1800, */
    pauseOnHover: false,
    variableWidth: true,
  };
  return (
    <div
      style={{
        width: "65%",
        marginTop: "60px",
        boxSizing: "border-box",
      }}
    >
      <OnairSlideStyle {...settings}>
        {items.map((work) => {
          return (
            <Item
              key={work.id}
              bg={work.id}
              style={{ width: "350px" }}
              onClick={() => navigate(`/contents/detail?id=${work.id}`)}
            />
          );
        })}
      </OnairSlideStyle>
    </div>
  );
};

export default OnairSlider;

const Item = styled.div`
  height: 450px;
  background: url("/img/wc${(props) => props.bg}.jpg") no-repeat center center;
  background-size: cover;
  cursor: pointer;
`;
const OnairSlideStyle = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;

    position: absolute;
    top: 50%;

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
    left: -5%;
    background: url("/img/on_prev.png") no-repeat center center;
    background-size: contain;
  }
  .slick-next {
    right: -5%;
    background: url("/img/on_next.png") no-repeat center center;
    background-size: contain;
  }
  .slick-slide {
    margin-right: 25px;
    height: 100%;
  }
  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
`;
