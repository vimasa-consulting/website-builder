import React from "react";

interface Props {
  url: string;
  height: number;
  width: number;
  borderRadius: number;
}

const ImageDisplayer: React.FC<Props> = ({
  url,
  height,
  width,
  borderRadius,
}) => {
  return (
    <div className="image-display">
      <img
        src={url}
        width={width}
        height={height}
        style={{ borderRadius: borderRadius }}
        alt="image"
      />
    </div>
  );
};

export default ImageDisplayer;
