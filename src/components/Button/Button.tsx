import React from "react";
import classNames from "classnames";

export enum ButtonSizes {
  Large = "lg",
  Small = "sm",
}

export enum ButtonTypes {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Outline = "outline",
  Link = "link",
}

export enum loadingTypes {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Outline = "outline",
  Link = "link",
}

interface IButtonProps {
  // 
  children?: React.ReactNode;
  btnType?: ButtonTypes;
  size?: ButtonSizes;
  className?: string;
  disabled?: boolean;
  href?: string;
  isLoading?: boolean;
  loadingType?: loadingTypes;
}

type ButtonProps = IButtonProps &
  React.ButtonHTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLElement>;

// Patial
// 可以让所有的属性都变成可选
type TButtonProps = Partial<ButtonProps>;

const Button: React.FC<TButtonProps> = ({
  children,
  btnType,
  className,
  disabled,
  size,
  href,
  isLoading,
  loadingType,
  ...restProps
}) => {
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonTypes["Link"] && disabled,
  });
  if (btnType === ButtonTypes["Link"] && href) {
    return (
      <a href={href} className={classes} {...restProps} {...{a : 1}}>
        {children}
      </a>
    );
  } else if (typeof isLoading === "boolean") {
    return (
      <button {...restProps} className={classes} disabled={disabled ||  isLoading} style={{ display: "flex" }}>
        {isLoading && <div data-title={loadingType} style={{ marginRight: "10px" }}>loading... ...</div>}
        <div>{children}</div>
      </button>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonTypes["Default"],
  loadingType: loadingTypes['Default']
};

export default Button;
