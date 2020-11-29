import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from "react";
import classNames from "classnames";

interface InputProps {
  disabled?: boolean;
  size?: "lg" | "sm";
  append?: string | ReactElement;
  prepand?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Omit表示可以忽略与原来的这个属性相冲突的属性
// 这里Omit表示忽略了size的这个属性，与&相与之后，采用InputProps中的size的type规定
export type InputType = InputProps &
  Omit<InputHTMLAttributes<HTMLElement>, "size">;

const Input: FC<InputType> = (props) => {
  const { disabled, size, append, prepand, ...restProps } = props;
  const classes = classNames("input", {
    [`input-${size}`]: size,
    [`input-append`]: append,
    [`input-prepand`]: prepand,
  });
  if ("value" in props) {
    delete restProps.defaultValue;
    if (props.value === null || !typeof props.value) {
      restProps.value = "";
    } else {
      restProps.value = props.value;
    }
  }
  const node = () => {
    if (append || prepand) {
      return <div>{append ? append : prepand}</div>;
    }
    return <></>;
  };
  return (
    <div className={classes}>
      <input disabled={disabled} {...restProps} />
      {node()}
    </div>
  );
};

Input.defaultProps = {
  disabled: false,
};

export default Input;
