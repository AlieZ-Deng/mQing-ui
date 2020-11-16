/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { TransitionGroup } from 'react-transition-group';
import Transition from './../Transition/index';
import Message, { messageType } from './message';
import './index.scss'

interface IOinfo {
  type: messageType;
  content: string;
  duration: number;
  onClose?: () => void;
  key: string;
}

interface INotification {
  notice: IOinfo;
}

const Notification: FC<INotification> = ({ notice }) => {
  const [infos, setInfos] = useState<IOinfo[]>([]);
  const timeout: number = 300;
  const addNotice = (notice: IOinfo) => {
    notice.key = getNoticeKey();
    setInfos((data) => {
      let newArr = [...data];
      newArr.unshift(notice);
      return newArr;
    });
  };
  useEffect(() => {
    addNotice(notice);
  }, [notice]);

  const removeNotice = (key: string) => {
    const newArr = infos.filter((item) => {
      if (item.key === key) {
        return false;
      }
      return true;
    });
    setInfos(newArr);
  };

  const getNoticeKey = () => {
    return `notice-${new Date().getTime()}`;
  };

  return (
    <TransitionGroup className={`${infos.length > 0 ? 'group' : ''}`}>
      {infos.map((item, index) => {
        return (
          <Transition timeout={timeout} key={index}>
            <Message
              id={item.key}
              close={removeNotice}
              content={item.content}
              type={item.type}
              duration={item.duration}
              onClose={item.onClose}
            ></Message>
          </Transition>
        );
      })}
    </TransitionGroup>
  );
};

const createNotification = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return {
    addNotice(notice: IOinfo) {
      ReactDOM.render(<Notification notice={notice} />, div);
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};

export default createNotification();
