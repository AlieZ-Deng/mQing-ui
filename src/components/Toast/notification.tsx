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
// class Notification extends Component {
//   constructor() {
//     super();
//     this.transitionTime = 300;
//     this.state = { notices: [] };
//     this.removeNotice = this.removeNotice.bind(this);
//   }

//   getNoticeKey() {
//     const { notices } = this.state;
//     return `notice-${new Date().getTime()}-${notices.length}`;
//   }

//   addNotice(notice) {
//     const { notices } = this.state;
//     notice.key = this.getNoticeKey();
//     if (notices.every((item) => item.key !== notice.key)) {
//       if (
//         notices.length > 0 &&
//         notices[notices.length - 1].type === "loading"
//       ) {
//         notices.push(notice);
//         setTimeout(() => {
//           this.setState({ notices });
//         }, this.transitionTime);
//       } else {
//         notices.push(notice);
//         this.setState({ notices });
//       }
//       if (notice.duration > 0) {
//         setTimeout(() => {
//           this.removeNotice(notice.key);
//         }, notice.duration);
//       }
//     }
//     return () => {
//       this.removeNotice(notice.key);
//     };
//   }

//   removeNotice(key) {
//     const { notices } = this.state;
//     this.setState({
//       notices: notices.filter((notice) => {
//         if (notice.key === key) {
//           if (notice.onClose) setTimeout(notice.onClose, this.transitionTime);
//           return false;
//         }
//         return true;
//       }),
//     });
//   }

//   render() {
//     const { notices } = this.state;
//     return (
//       <TransitionGroup className="toast-notification">
//         {notices.map((notice) => (
//           <CSSTransition
//             key={notice.key}
//             classNames="toast-notice-wrapper notice"
//             timeout={this.transitionTime}
//           >
//             <Notice {...notice} />
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     );
//   }
// }
