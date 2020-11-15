import React, { FC } from "react";

export type messageType = "info" | "success" | "warning" | "error" | "loading";

interface IMessageProps {
  type?: messageType;
  title: string;
}

const message: FC<IMessageProps> = ({ type, title }) => {
  return (
    <div className="message-wrapper">
      <div>{type}</div>
      <div className="message-title">{title}</div>
    </div>
  );
};

message.defaultProps = {
  type: "info",
};

export default message;
