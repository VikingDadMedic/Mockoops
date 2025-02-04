import { Composition } from "remotion";
import TextReveal from "./TextReveal";

const Root = () => {
  return (
    <Composition
      component={TextReveal}
      durationInFrames={112}
      fps={30}
      width={1920}
      height={1080}
      id="quick-teaser"
      defaultProps={{ companyName: "Your Company Name", companyUrl: "Your website URL" }}
    />
  );
};

export default Root;
