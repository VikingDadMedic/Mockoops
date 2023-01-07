import QuickTeaser from "./QuickTeaser";

export const config = {
  id: "quick-teaser",
  title: "Quick Teaser!",
  durationInFrames: 180,
  extraDuration: 0,
  fps: 30,
  template: QuickTeaser,
  defaultProps: {
    video:
      "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsfinal.mp4",
    audio:
      "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3",
  },
  height: 1080,
  width: 1920,
  authors: ["VS"],
  inputPropsSchema: [
    {
      type: "file",
      defaultValue:
        "https://s3.ap-south-1.amazonaws.com/assets.mockoops.mohitya.dev/assetsfinal.mp4",
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
      type: "number",
      defaultValue: 30,
      name: "Border Radius (px)",
      key: "borderRadius",
      step: 5,
      min: 0,
      max: 200,
    },
  ],
};
