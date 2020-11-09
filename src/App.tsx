import React from 'react';
import Button, { ButtonTypes, ButtonSizes } from './components/Button/Button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/subMenu';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log('asdasd');
        }}
      >
        Default Button
      </Button>
      <Button btnType={ButtonTypes['Primary']}>Primary Button</Button>
      <Button btnType={ButtonTypes['Danger']}>Danger Button</Button>
      <Button size={ButtonSizes['Large']}>Large Button</Button>
      <Button size={ButtonSizes['Small']}>Small Button</Button>
      <Button btnType={ButtonTypes['Primary']} disabled>
        Disabled Button
      </Button>
      <Button btnType={ButtonTypes['Link']} disabled href='http:baidu.com'>
        Disabled Link
      </Button>
      <Button
        btnType={ButtonTypes['Link']}
        target='_blank'
        href='https:baidu.com'
      >
        Link
      </Button>
      <Button
        btnType={ButtonTypes['Link']}
        target='_blank'
        href='https:baidu.com'
      >
        /learn react/i
      </Button>
      <Button btnType={ButtonTypes['Primary']} isLoading={true}>
        Loading Button
      </Button>

      <Menu
        defaultIndex={1}
        onSelect={(index) => {
          // console.log(index);
        }}
      >
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <SubMenu title='SubMenuItem'>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </SubMenu>
        {/* <li></li> */}
      </Menu>

      <Menu
        mode='vertical'
        defaultIndex={1}
        onSelect={(index) => {
          console.log(index);
        }}
      >
        <MenuItem index={0} disabled>
          Item 1
        </MenuItem>
        <MenuItem index={1}>Item 2</MenuItem>
        <MenuItem index={2}>Item 3</MenuItem>
        <SubMenu title='SubMenuItem'>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </SubMenu>
      </Menu>

      <header className='App-header'></header>
    </div>
  );
};

export default App;
