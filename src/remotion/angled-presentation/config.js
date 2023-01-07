import AngledPresentation from "./AngledPresentation";

export const config = {
  id: "angled-presentation",
  title: "Angled Presentation",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: AngledPresentation,
  defaultProps: {
    bgVideo:
      "https://travel-content-studio.s3.amazonaws.com/Plasma.mp4",
    video:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsScreen+Recording+2022-06-25+at+6.31.33+PM.mov",
    audio:
      "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3",
  },
  height: 600,
  width: 1066,
  authors: ["VS"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://travel-content-studio.s3.amazonaws.com/Plasma.mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsScreen+Recording+2022-06-25+at+6.31.33+PM.mov",
      name: "Video",
      key: "video",
    },
    {
      type: "file",
      defaultValue:
        "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3",
      name: "Audio",
      key: "audio",
    },
  ],
};
