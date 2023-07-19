import React from "react";

interface Props {
  url: string;
  height: number;
  width: number;
  borderRadius: number;
  heading: string;
  subheading: string;
}

const ImageWithDesc: React.FC<Props> = ({
  url,
  height,
  width,
  borderRadius,
  heading,
  subheading,
}) => {
  return (
    <div className="icon-display">
      <div className="icon-display-item-one">
        <img
          src={url}
          width={width}
          height={height}
          style={{ borderRadius: borderRadius }}
          alt="image"
        />
      </div>
      <div className="item-display-item-two">
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </div>
    </div>
  );
};

export default ImageWithDesc;
