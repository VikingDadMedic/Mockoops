import { RotateTitle } from "./RotateTitle";

export const config = {
  id: "rotate-title",
  title: "Rotate Title",
  durationInFrames: 300,
  extraDuration: 0,
  fps: 30,
  template: RotateTitle,
  defaultProps: {
    title: "New Website",
    subtitle: "Your Go To Travel Advice",
  },
  height: 600,
  width: 1066,
  authors: ["VS"],
  inputPropsSchema: [
    {
      type: "text",
      defaultValue: "Ace Adventure Travel",
      name: "Title Text",
      key: "title",
    },
    {
      type: "text",
      defaultValue: "Your Go To Travel Advice",
      name: "Subtitle Text",
      key: "subtitle",
    },
    {
      type: "file",
      defaultValue:
        "https://travel-content-studio.s3.amazonaws.com/ocean.mp4",
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
