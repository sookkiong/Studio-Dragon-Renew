import { SectionsContainer, Section } from "react-fullpage";
import MainSlider from "../components/MainSlider";

const MainPage = () => {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
  };

  return (
    <SectionsContainer {...options}>
      <Section>
        <div>
          <MainSlider />
        </div>
      </Section>
      <Section>
        <div>섹션2</div>
      </Section>
      <Section>
        <div>섹션3</div>
      </Section>
    </SectionsContainer>
  );
};

export default MainPage;
