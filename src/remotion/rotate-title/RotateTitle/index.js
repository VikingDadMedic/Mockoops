import {
  AbsoluteFill,
  useVideoConfig,
  Loop,
  useCurrentFrame,
  Video,
  spring,
  interpolate,
  Audio,
} from "remotion";

import {
  wrapperStyle,
  backgroundVideoStyle,
  deviceStyle,
  titleScreenStyle,
  headingStyle,
  subtitleStyle,
  videoWrapperStyle,
  videoScreenStyle,
} from "./styles";

export const RotateTitle = ({
  title,
  subtitle,
  video,
  backgroundVideo,
  audio,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const appear = spring({ fps, frame, config: { mass: 10, damping: 50 } });

  const scale = interpolate(appear, [0, 1], [0, 1]);

  const flip = spring({
    fps,
    frame: frame - 70,
    config: { mass: 10, damping: 50 },
  });

  const flipValue = interpolate(flip, [0, 0.5, 1], [-1, 0, 1]);

  return (
    <AbsoluteFill style={wrapperStyle}>
      {/* Background Video */}
      <Loop durationInFrames={3600}>
        <Video
          style={backgroundVideoStyle}
          src={
            backgroundVideo ||
            "https://travel-content-studio.s3.amazonaws.com/ocean.mp4"
          }
        />
      </Loop>
      <Audio
        src={
          audio ||
          "https://file-examples.com/storage/feefe3d0dd63b5a899e4775/2017/11/file_example_MP3_700KB.mp3"
        }
      />

      {/* Device */}
      <div
        style={{
          ...deviceStyle,
          transform: `scale(${scale}) rotateY(${90 - Math.abs(flipValue) * 90
            }deg)`,
        }}
      >
        {/* Title Screen */}
        {flipValue < 0 ? (
          <>
            <div style={titleScreenStyle}>
              <h1 style={headingStyle}>{title || "Hello there!"}</h1>
              <p style={subtitleStyle}>{subtitle || "We're happy to hear!"}</p>
            </div>
          </>
        ) : (
          <div style={videoWrapperStyle}>
            <Video
              style={videoScreenStyle}
              startFrom={0}
              src={
                video ||
                "https://travel-content-studio.s3.amazonaws.com/ocean.mp4"
              }
              muted
            />
          </div>
        )}
        {/* Video Screen */}
      </div>
    </AbsoluteFill>
  );
};
