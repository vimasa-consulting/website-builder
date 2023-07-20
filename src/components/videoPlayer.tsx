import React from "react";

interface Props {
  videoUrl: string;
  width: number;
  height: number;
}

const VideoPlayer: React.FC<Props> = ({ videoUrl, width, height }) => {
  return (
    <video width={width} height={height} controls>
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
