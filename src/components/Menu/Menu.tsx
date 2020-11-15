import React, { FC, createContext, useState } from "react";
import classNames from "classnames";
import { IMenuItempProps } from "./MenuItem";

type SelectFn = (index: number) => void;

// 横向排列 | 垂直排列
type MenuMode = "horizontal" | "vertical";

export interface IMenuProps {
  onSelect?: SelectFn;
  defaultIndex?: number;
  mode?: MenuMode;
  className?: string;
  style?: React.CSSProperties;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectFn;
}

export const MenuContext = createContext<IMenuContext>({
  index: 0,
});

const Menu: FC<IMenuProps> = ({
  className,
  children,
  style,
  mode,
  defaultIndex,
  onSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(
    defaultIndex ? defaultIndex : 0
  );

  const onClickHandler = (index: number) => {
    setCurrentIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const classes = classNames("menu", className, {
    [`menu-mode-${mode}`]: mode,
  });

  const contextValue: IMenuContext = {
    index: currentIndex,
    onSelect: onClickHandler,
  };

  const renderChildren = () => {
    return React.Children.map(children, (item, index) => {
      const child = item as React.FunctionComponentElement<IMenuItempProps>;
      if (
        child.type.displayName === "MenuItem" ||
        child.type.displayName === "SubMenu"
      ) {
        const cloneChild = React.cloneElement(child, {
          index,
          clone: "123213",
        });
        return cloneChild;
      } else {
        console.warn(
          "the children is not match the MenuItem , should use the SubMenu or MenuItem"
        );
        return null;
      }
    });
  };

  return (
    <ul style={style} className={classes} data-testid="test">
      <MenuContext.Provider value={contextValue}>
        {/* {children} */}
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  mode: "horizontal",
  defaultIndex: 0,
};

export default Menu;
