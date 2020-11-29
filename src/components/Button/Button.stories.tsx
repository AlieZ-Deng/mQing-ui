import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

const defaultButton = () => (
  <div>
    <Button onClick={action("default button")}>default button</Button>
  </div>
);

storiesOf("Button 按钮", module)
  .addParameters({
    info: {
      text: `
        ## 引用方法
        ~~~js
        import {Button} from ecoh-rui
        ~~~
        `,
    },
  })
  .add("默认 Button", defaultButton);
