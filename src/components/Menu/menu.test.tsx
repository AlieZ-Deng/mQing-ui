import React from "react";
import Menu, { IMenuProps } from "./Menu";
import MenuItem from "./MenuItem";

import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from "@testing-library/react";

const testProps: IMenuProps = {
  className: "test",
  defaultIndex: 0,
  onSelect: jest.fn(),
};

const modeTestProps: IMenuProps = {
  mode: "vertical",
};

const testComponent = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem >active</MenuItem>
      <MenuItem  disabled>
        disabled
      </MenuItem>
      <MenuItem >normal</MenuItem>
      <div>1231</div>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuEle: HTMLElement,
  activeEle: HTMLElement,
  disabledEle: HTMLElement;
describe("test menu component", () => {
  // beforeEach 在每个测试case开始之前都会跑一遍
  beforeEach(() => {
    wrapper = render(testComponent(testProps));
    menuEle = wrapper.getByTestId("test");
    // menuEle 也可通过wrapper.container变成html元素 然后通过querySeletor()
    // menuEle = wrapper.container.querySelector("ul");
    activeEle = wrapper.getByText("active");
    disabledEle = wrapper.getByText("disabled");
  });
  test("test1", () => {
    expect(menuEle).toBeInTheDocument();
    expect(menuEle).toHaveClass("menu test");
    expect(menuEle.querySelectorAll("li").length).toEqual(3);
    expect(activeEle).toHaveClass("menu-item menu-item-active");
    expect(disabledEle).toHaveClass("menu-item menu-item-disabled");
  });
  test("test2", () => {
    const normalEle = wrapper.getByText("normal");
    fireEvent.click(normalEle);
    //   callwith表示是否传入的参数为2
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    expect(normalEle).toHaveClass("menu-item-active");
    expect(activeEle).not.toHaveClass("menu-item-active");
  });
  test("test3", () => {
    cleanup();
    wrapper = render(testComponent(modeTestProps));
    const modeEle = wrapper.getByTestId("test");
    expect(modeEle).toHaveClass('menu-mode-vertical')
  });
});
