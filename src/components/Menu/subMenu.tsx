import React, {
  FC,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";
import { MenuContext } from "./Menu";
import { IMenuItempProps } from "./MenuItem";
import classNames from "classnames";

export interface ISubMenupProps {
  index?: number;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  onSelect?: (index: string) => void;
}

interface ISubMenuContext {
  subMenuIndex?: string | null;
  onChange?: (index: number) => void;
}

export const SubMenuContext = createContext<ISubMenuContext>({
  subMenuIndex: null,
});

const SubMenu: FC<ISubMenupProps> = ({
  title,
  children,
  className,
  style,
  index,
  onSelect,
}) => {
  const { index: currentIndex, onSelect: onMenuSelect } = useContext(
    MenuContext
  );

  const [subItemIndex, setSubItemIndex] = useState<string>(`${currentIndex}-0`);

  useEffect(() => {
    console.log("asdasd", currentIndex);
    //   setSubItemIndex(`${currentIndex}-0`);
  }, [currentIndex]);

  const classes = classNames("sub-menu", className, {
    "sub-menu-active": currentIndex === index,
  });
  const renderChildren = () => {
    const liNode = React.Children.map(children, (item, si) => {
      const child = item as React.FunctionComponentElement<IMenuItempProps>;
      if (child.type.displayName === "MenuItem") {
        return React.cloneElement(child, {
          id: si,
          subItemIndex: `${index}-${si}`,
        });
      } else {
        console.warn(
          "the children is not match the SubMenu , should use the MenuItem"
        );
        return null;
      }
    });
    return <ul>{liNode}</ul>;
  };

  const onChangeHandler = (index: number) => {
    setSubItemIndex(`${currentIndex}-${index}`);
    if (onSelect) {
      onSelect(`${currentIndex}-${index}`);
    }
  };

  const value: ISubMenuContext = {
    subMenuIndex: subItemIndex,
    onChange: onChangeHandler,
  };

  const clickHandler = () => {
    if (onMenuSelect && typeof index === "number") {
      onMenuSelect(index);
    }
  };

  return (
    <li style={style} className={classes} onClick={clickHandler}>
      <div className="sub-menu-title">
        <span>{title}</span>
      </div>
      <SubMenuContext.Provider value={value}>
        {renderChildren()}
      </SubMenuContext.Provider>
    </li>
  );
};

// 组件的静态属性
SubMenu.displayName = "SubMenu";

export default SubMenu;
