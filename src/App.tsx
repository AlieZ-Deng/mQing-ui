import React, { useState } from "react";
import Button, { ButtonTypes, ButtonSizes } from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/subMenu";
import Transition from "./components/Transition";
import { TransitionGroup } from "react-transition-group";

import {
  LoadingSpinner,
  LoadingRoundSpinner,
  LoadingZoomSpinner,
  LoadingEllipsis,
  LoadingEllipsisActive,
} from "./components/Loading";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="App">
      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log("asdasd");
        }}
      >
        Default Button
      </Button>
      <Button btnType={ButtonTypes["Primary"]}>Primary Button</Button>
      <Button btnType={ButtonTypes["Danger"]}>Danger Button</Button>
      <Button size={ButtonSizes["Large"]}>Large Button</Button>
      <Button size={ButtonSizes["Small"]}>Small Button</Button>
      <Button btnType={ButtonTypes["Primary"]} disabled>
        Disabled Button
      </Button>
      <Button btnType={ButtonTypes["Link"]} disabled href="http:baidu.com">
        Disabled Link
      </Button>
      <Button
        btnType={ButtonTypes["Link"]}
        target="_blank"
        href="https:baidu.com"
      >
        Link
      </Button>
      <Button
        btnType={ButtonTypes["Link"]}
        target="_blank"
        href="https:baidu.com"
      >
        /learn react/i
      </Button>
      <Button btnType={ButtonTypes["Primary"]} isLoading={true}>
        Loading Button
      </Button>
      <Button
        btnType={ButtonTypes["Primary"]}
        size={ButtonSizes["Small"]}
        isLoading={true}
      >
        Loading Button
      </Button>
      <Button
        btnType={ButtonTypes["Primary"]}
        size={ButtonSizes["Large"]}
        isLoading={true}
      >
        Loading Button
      </Button>
      <Button
        isLoading={true}
        btnType={ButtonTypes["Primary"]}
        size={ButtonSizes["Large"]}
        loadingType="zoom-spinner"
      >
        Loading Button
      </Button>
      <Button
        btnType={ButtonTypes["Primary"]}
        isLoading={true}
        loadingType="ellipsis"
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
        <SubMenu title="SubMenuItem">
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
        </SubMenu>
        {/* <li></li> */}
      </Menu>

      <Menu
        mode="vertical"
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
        <SubMenu title="SubMenuItem">
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
        <Button onClick={() => setShow(!show)}>展现</Button>
      </div>
      <Transition in={show} timeout={300}><div>sdasdasdas</div></Transition>
      <TransitionGroup></TransitionGroup>
      <header className="App-header"></header>
    </div>
  );
};

export default App;
