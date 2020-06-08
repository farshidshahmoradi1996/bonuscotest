import React from "react";
import { Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
const ErrorState: React.FC<{ onRetry(): void }> = ({ onRetry }) => {
  return (
    <div className="flex-center h-screen" style={{ flexDirection: "column" }}>
      <WarningOutlined style={{ fontSize: 32, color: "white" }} />
      <p style={{ padding: "10px 0 ", color: "white" }}>
        Error In Connecting ...
      </p>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  );
};
export default ErrorState;
