import notificationDOM from "./notification";
// import "./toast.css";

interface IFn {
  (title: string, duration?: number, onClose?: () => void, type?: string): void;
}

interface IObj {
  info: IFn;
  success: IFn;
  warning: IFn;
  loading: IFn;
  error: IFn;
}

let notification: any;
const notice: IFn = (content, duration = 2000, onClose, type) => {
  if (!notification) notification = notificationDOM;
  return notification.addNotice({ type, content, duration, onClose });
};

const obj: IObj = {
  info: function (content, duration, onClose) {
    return notice(content, duration, onClose, "info");
  },
  success(content, duration, onClose) {
    return notice(content, duration, onClose, "info");
  },
  warning(content, duration, onClose) {
    return notice(content, duration, onClose, "warning");
  },
  error(content, duration, onClose) {
    return notice(content, duration, onClose, "error");
  },
  loading(content, duration = 0, onClose) {
    return notice(content, duration, onClose, "loading");
  },
};
export default obj;
