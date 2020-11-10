import React from 'react';
import classNames from 'classnames';
import {
  LoadingSpinner,
  LoadingRoundSpinner,
  LoadingZoomSpinner,
  LoadingEllipsis,
  LoadingEllipsisActive,
} from './../Loading';

export enum ButtonSizes {
  Large = 'lg',
  Small = 'sm',
}

export enum ButtonTypes {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Outline = 'outline',
  Link = 'link',
}

type loadingTypes =
  | 'spinner'
  | 'round-spinner'
  | 'zoom-spinner'
  | 'ellipsis'
  | 'ellipsis-active';

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

function renderLoading(type: loadingTypes) {
  console.log(type);
  switch (type) {
    case 'spinner':
      return <LoadingSpinner />;
      break;
    case 'round-spinner':
      return <LoadingRoundSpinner />;
      break;
    case 'zoom-spinner':
      return <LoadingZoomSpinner />;
      break;
    case 'ellipsis':
      return <LoadingEllipsis />;
      break;
    case 'ellipsis-active':
      return <LoadingEllipsisActive />;
      break;
  }
}

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
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonTypes['Link'] && disabled,
  });
  if (btnType === ButtonTypes['Link'] && href) {
    return (
      <a href={href} className={classes} {...restProps} {...{ a: 1 }}>
        {children}
      </a>
    );
  } else if (typeof isLoading === 'boolean') {
    return (
      <button
        {...restProps}
        className={classes}
        disabled={disabled}
        // disabled={isLoading}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isLoading && loadingType && (
            <div className='loading-containner'>
              {renderLoading(loadingType)}
            </div>
          )}
          <div>{children}</div>
        </div>
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
  btnType: ButtonTypes['Default'],
  loadingType: 'spinner',
};

export default Button;
