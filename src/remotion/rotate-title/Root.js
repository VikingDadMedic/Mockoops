import { Composition } from "remotion";
import { RotateTitle } from "./RotateTitle";

const MyVideo = () => {
  return (
    <Composition
      id="rotate-title"
      fps={30}
      durationInFrames={1000}
      width={1066}
      height={600}
      component={RotateTitle}
      defaultProps={{ title: "Ace Adventure Travel", subtitle: "Your Go To Travel Advice" }}
      loop
    />
  );
};

export default MyVideo;
