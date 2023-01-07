import Slider from "react-slick";
import { Works } from "../Contents";
import styled from "styled-components";
import { useNavigate } from "react-router";
import "../../slick/onair-slick.css";
import "../../slick/onair-slick-theme.css";

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
      <Slider {...settings}>
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
      </Slider>
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
