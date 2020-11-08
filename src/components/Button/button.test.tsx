import React from 'react'
import { render,fireEvent } from '@testing-library/react'
import Button from './Button'

// 检查用户交互行为 首先第一需要监控事件是否被触发，这里使用mock fn  其次模拟用户点击操作
const clickProps = {
    onClick : jest.fn()
}

const disabledProps = {
    disabled : true,
    onClick : jest.fn()
}
// test('first test case', () => {
//     const wrapper = render(<Button >first</Button>);
//     const ele = wrapper.queryByText('first');
//     expect(ele).toBeTruthy()
// })

// describe 分类的意思
describe('test button component',() => {
    it('should render the correct defalut button', () =>  {
        const wrapper = render(<Button {...clickProps}>first</Button>);
        const ele = wrapper.queryByText('first');
        // get/queryByText的区别在于返回的类型不一致
        const ele2 = wrapper.getByText('first');
        // 判断ele是否在文档渲染
        expect(ele).toBeInTheDocument();
        // 判断ele的标签是否符合
        expect(ele2.tagName).toEqual('BUTTON');
        expect(ele2).toHaveClass('btn');
        // 模拟用户点击操作
        fireEvent.click(ele2);
        // 检测click事件是否被触发
        expect(clickProps.onClick).toHaveBeenCalled();
    })

    test('should render the correct disabled button' , () => {
        const wrapper = render(<Button {...disabledProps}>btn</Button>);
        const ele = wrapper.getByText('btn') as HTMLButtonElement;
        expect(ele).toBeInTheDocument();
        expect(ele.tagName).toEqual('BUTTON');
        // 因为不是所有的ele 即是html元素都有disabled属性 ，所以我们要去断言为button HTMLButtonElement
        expect(ele.disabled).toBeTruthy();
        fireEvent.click(ele);
        expect(disabledProps.onClick).not.toHaveBeenCalled()

    })
})