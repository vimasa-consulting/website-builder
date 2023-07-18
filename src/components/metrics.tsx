import React from "react";

interface Props {
  metricsValue: string;
}

const Metrics: React.FC<Props> = ({ metricsValue }) => {
  return (
    <div className="metrics-header">
        <h1>{metricsValue}</h1>
    </div>
  );
};

export default Metrics;
