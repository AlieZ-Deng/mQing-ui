import React, { FC, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Message, { messageType } from "./message";

interface IOinfo {
  type?: messageType;
  title: string;
  duration?: number;
  onClose?: () => void;
  key?: string;
}

interface INotification {
  ref?: React.RefObject<HTMLElement>;
  //   ref?: any;
}

const Notification: FC<INotification> = (props) => {
  const [infos, setInfos] = useState<IOinfo[]>([]);
  const timeout: number = 300;

  const addNotice = (notice: IOinfo) => {
    const newArr = infos;
    notice.key = getNoticeKey();
    newArr.unshift(notice);
    setInfos(newArr);
    if (notice.duration && notice.duration > 0) {
      setTimeout(() => {
        removeNotice(notice.key as string);
      }, notice.duration);
    }
  };

  const removeNotice = (key: string) => {
    const newArr = infos.filter((item) => {
      if (item.key === key) {
        if (item.onClose) setTimeout(item.onClose, 0);
        return false;
      }
      return true;
    });
    setInfos(newArr);
  };

  const getNoticeKey = () => {
    return `notice-${new Date().getTime()}-${infos.length + 1}`;
  };

  return (
    <TransitionGroup>
      {infos.map((item, index) => {
        return (
          <CSSTransition key={index} timeout={timeout}>
            <Message title={item.title} type={item.type}></Message>;
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const createNotification = () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  //   const ref = React.createRef();
  const ref = useRef<any>(null);
  ReactDOM.render(<Notification ref={ref} />, div);
  return {
    addNotice(notice: IOinfo) {
      //   return ref.current!.addNotice(notice);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};

export default createNotification();
