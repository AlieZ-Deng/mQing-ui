import React from 'react';
import Menu, { IMenuProps } from './Menu';
import MenuItem from './MenuItem';
import SubMenu, { ISubMenupProps } from './subMenu';

import {
  cleanup,
  fireEvent,
  render,
  RenderResult,
} from '@testing-library/react';

const testProps: IMenuProps = {
  className: 'test',
  defaultIndex: 0,
  onSelect: jest.fn(),
};

const subTestProps: ISubMenupProps = {
  title: 'submenu-test',
  onSelect: jest.fn(),
  className: 'gogogo',
};

const modeTestProps: IMenuProps = {
  mode: 'vertical',
};

const testComponent = (props: IMenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>normal</MenuItem>
      <SubMenu {...subTestProps}>
        {/* 3-0 */}
        <MenuItem>submenu-1</MenuItem>
        {/* 3-1 */}
        <MenuItem>submenu-2</MenuItem>
      </SubMenu>
    </Menu>
  );
};

let wrapper: RenderResult,
  menuEle: HTMLElement,
  activeEle: HTMLElement,
  disabledEle: HTMLElement,
  subMenuEle: HTMLElement;
describe('test menu component', () => {
  // beforeEach 在每个测试case开始之前都会跑一遍
  beforeEach(() => {
    wrapper = render(testComponent(testProps));
    menuEle = wrapper.getByTestId('test');
    subMenuEle = wrapper.getByTestId('submenu-test');
    // menuEle 也可通过wrapper.container变成html元素 然后通过querySeletor()
    // menuEle = wrapper.container.querySelector("ul");
    activeEle = wrapper.getByText('active');
    disabledEle = wrapper.getByText('disabled');
  });
  
  test('test1', () => {
    expect(menuEle).toBeInTheDocument();
    expect(menuEle).toHaveClass('menu test');
    expect(menuEle.querySelectorAll('li').length).toEqual(6);
    expect(activeEle).toHaveClass('menu-item menu-item-active');
    expect(disabledEle).toHaveClass('menu-item menu-item-disabled');
  });

  test('test2', () => {
    const normalEle = wrapper.getByText('normal');
    fireEvent.click(normalEle);
    //   callwith表示是否传入的参数为2
    expect(testProps.onSelect).toHaveBeenCalledWith(2);
    expect(normalEle).toHaveClass('menu-item-active');
    expect(activeEle).not.toHaveClass('menu-item-active');
  });

  test('test3', () => {
    cleanup();
    wrapper = render(testComponent(modeTestProps));
    const modeEle = wrapper.getByTestId('test');
    expect(modeEle).toHaveClass('menu-mode-vertical');
  });

  test('test4', () => {
    const sub1 = wrapper.getByText('submenu-1');
    const sub2 = wrapper.getByText('submenu-2');
    const title = subMenuEle.querySelector('span')?.innerHTML;
    expect(title).toEqual('submenu-test');
    expect(subMenuEle).toBeInTheDocument();
    expect(subMenuEle).toHaveClass('sub-menu  gogogo');
    expect(sub1).toHaveClass('menu-item');

    fireEvent.click(sub1);
    expect(subTestProps.onSelect).toBeCalledWith('3-0');
    expect(sub1).toHaveClass('submenu-item-active');
    fireEvent.click(sub2);
    expect(sub1).not.toHaveClass('submenu-item-active');
  });
});
