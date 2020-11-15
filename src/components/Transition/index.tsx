import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

import "./style/_transition.scss";

type animation =
  | "zoom-in-top"
  | "zoom-in-left"
  | "zoom-in-right"
  | "zoom-in-bottom";

interface ITransitionProps {
  animation?: animation;
  wrapper?: boolean;
  key?: number;
}

type transition = ITransitionProps & CSSTransitionProps;

const index: FC<transition> = ({
  children,
  animation,
  wrapper,
  classNames,
  key,
  ...restProps
}) => {
  console.log({ ...restProps });
  return (
    <CSSTransition
      {...restProps}
      classNames={classNames ? classNames : animation}
    >
      <div>{children}</div>
      {/* {wrapper ? <div>{children}</div> : { children }} */}
    </CSSTransition>
  );
};

index.defaultProps = {
  unmountOnExit: true,
  appear: true,
  animation: "zoom-in-top",
};

export default index;
