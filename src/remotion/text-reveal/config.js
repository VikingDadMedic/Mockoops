import TextReveal from "./TextReveal";

export const config = {
  id: "text-reveal",
  title: "Text Reveal",
  durationInFrames: 112,
  extraDuration: 0,
  fps: 30,
  template: TextReveal,
  defaultProps: {
    video:
      "https://travel-content-studio.s3.amazonaws.com/Summer_Forest.mp4",
    audio:
      "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3",
    companyName: "Your Company Name",
    companyUrl: "Your website URL",
  },
  height: 1080,
  width: 1920,
  authors: ["VS"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://travel-content-studio.s3.amazonaws.com/Summer_Forest.mp4",
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
    {
      type: "text",
      defaultValue: "Your Company Name",
      name: "Company Name",
      key: "companyName",
    },
    {
      type: "text",
      defaultValue: "Your website URL",
      name: "Company URL",
      key: "companyUrl",
    },
  ],
};
