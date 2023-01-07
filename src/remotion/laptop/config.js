import Laptop from "./Laptop";

export const config = {
  id: "laptop",
  title: "Laptop Zoom",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: Laptop,
  defaultProps: {
    bgVideo:
      "https://travel-content-studio.s3.amazonaws.com/Clouds.mp4",
    video:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/scenery.mp4",
    audio:
      "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3",
  },
  height: 800,
  width: 1516,
  authors: ["VS"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://travel-content-studio.s3.amazonaws.com/Clouds.mp4",
      name: "Background Video",
      key: "bgVideo",
    },
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/scenery.mp4",
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
