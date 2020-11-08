import React, { FC, useContext } from "react";
import { MenuContext } from "./Menu";
import { SubMenuContext } from "./subMenu";
import classNames from "classnames";

export interface IMenuItempProps {
  clone?: string;
  key?: any;
  index?: number;
  subItemIndex?: string;
  id?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: FC<IMenuItempProps> = ({
  children,
  className,
  style,
  index,
  disabled,
  clone,
  subItemIndex,
  id,
}) => {
  // console.log("clone后的属性1", );
  const { index: currentIndex, onSelect } = useContext(MenuContext);
  const { subMenuIndex: currentSubMenuIndex, onChange } = useContext(
    SubMenuContext
  );
  // console.log('asdasdasda' , currentSubMenuIndex)
  const classes = classNames("menu-item", className, {
    "menu-item-disabled": disabled,
    "menu-item-active": index === currentIndex,
    "submenu-item-active": subItemIndex === currentSubMenuIndex,
  });
  const clickHandler = () => {
    if (onSelect && !disabled && typeof index === "number") {
      onSelect(index);
    }
    if (onChange && !disabled && typeof id === "number") {
      onChange(id);
    }
  };
  return (
    <li style={style} className={classes} onClick={clickHandler}>
      {children}
    </li>
  );
};
// 组件的静态属性
MenuItem.displayName = "MenuItem";

export default MenuItem;
