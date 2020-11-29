<<<<<<< HEAD
import React, { ChangeEvent, useState } from "react";
import Button, { ButtonTypes, ButtonSizes } from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition";
import { TransitionGroup } from "react-transition-group";
import Input from "./components/Input/Input";
import AutoComplete from "./components/AutoComplete";
=======
import React, { useState } from 'react';
import Button, { ButtonTypes, ButtonSizes } from './components/Button/Button';
import Menu from './components/Menu/Menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/subMenu';
import Transition from './components/Transition';
import { TransitionGroup } from 'react-transition-group';
import Toast from './components/Toast';
>>>>>>> 01dfff3ce3f62b45cb3e96bcb0300839e3a75855

import {
  LoadingSpinner,
  LoadingRoundSpinner,
  LoadingZoomSpinner,
  LoadingEllipsis,
  LoadingEllipsisActive,
} from './components/Loading';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>(["1", "2", "3"]);
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className="App">
      <AutoComplete
        dataSource={data}
        onSelect={(item) => {
          console.log(item);
        }}
        onChange={(a) => {
          // console.log(a);
          // const b = data.filter((item) => item === a);
          // setData(b);
        }}
      />
      {/* <Input
        append="123"
        defaultValue={"asdsadasd"}
        value={value}
        onChange={(e) => {
          const event = e as ChangeEvent<HTMLInputElement>;
          setValue(event.target.value);
        }}
      /> */}
      <Input prepand={<div>我草拟</div>} />
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
      <Button
        btnType={ButtonTypes['Primary']}
        size={ButtonSizes['Small']}
        isLoading={true}
      >
        Loading Button
      </Button>
      <Button
        btnType={ButtonTypes['Primary']}
        size={ButtonSizes['Large']}
        isLoading={true}
      >
        Loading Button
      </Button>
      <Button
        isLoading={true}
        btnType={ButtonTypes['Primary']}
        size={ButtonSizes['Large']}
        loadingType='zoom-spinner'
      >
        Loading Button
      </Button>
      <Button
        btnType={ButtonTypes['Primary']}
        isLoading={true}
        loadingType='ellipsis'
      >
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

      <LoadingSpinner />

      <LoadingRoundSpinner />

      <LoadingZoomSpinner />

      <LoadingEllipsis></LoadingEllipsis>

      <LoadingEllipsisActive />

      <div>
        <Button
          onClick={() => {
            Toast.error('123222', 100000);
          }}
        >
          展现
        </Button>
        <Button
          onClick={() => {
            Toast.success('123', 3000);
          }}
        >
          展现22
        </Button>
      </div>
      <Transition in={show} timeout={300}>
        <div>sdasdasdas</div>
      </Transition>
      <TransitionGroup></TransitionGroup>
      <header className='App-header'></header>
    </div>
  );
};

export default App;
