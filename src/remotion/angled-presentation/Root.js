import { Composition } from "remotion";
import AngledPresentation from "./AngledPresentation";

export const Root = () => {
  return (
    <Composition
      durationInFrames={300}
      fps={30}
      component={AngledPresentation}
      id="angled-presentation"
      width={1066}
      height={600}
      defaultProps={{
        bgVideo:
          "https://travel-content-studio.s3.amazonaws.com/Plasma.mp4",
        video:
          "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsScreen+Recording+2022-06-25+at+6.31.33+PM.mov",
        audio:
          "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3",
      }}
    />
  );
};
