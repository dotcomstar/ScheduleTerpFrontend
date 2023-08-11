import CenteredComponents from "../components/CenteredComponents";
import ExternalButton from "../components/ExternalButton";

const AboutPage = () => {
  return (
    <CenteredComponents>
      <ExternalButton
        text="Frontend code"
        link="https://github.com/dotcomstar/ScheduleTerpFrontend/tree/main"
      />
      <ExternalButton
        text="Backend code"
        link="https://github.com/olivervillegas/ScheduleTerp"
      />
    </CenteredComponents>
  );
};

export default AboutPage;
