import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const LoadingState = () => {
  return (
    <div className="flex-center h-screen">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 32, color: "white" }} spin />
        }
      />
    </div>
  );
};
export default LoadingState;
