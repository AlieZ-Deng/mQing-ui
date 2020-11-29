import React, { FC, useEffect, useCallback } from 'react';

export type messageType = 'info' | 'success' | 'warning' | 'error' | 'loading';

interface IMessageProps {
  type: messageType;
  content: string;
  duration: number;
  onClose?: () => void;
  close: (key: string) => void;
  id: string;
}

let timer: any;
const Message: FC<IMessageProps> = ({
  type,
  content,
  duration,
  onClose,
  close,
  id,
}) => {
  const startCloseTimer = useCallback(() => {
    if (duration && duration > 0) {
      timer = setTimeout(() => {
        if (onClose) {
          onClose();
        }
        close(id);
      }, duration);
    }
  }, [close, duration, id, onClose]);
  const clearCloseTimer = useCallback(() => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }, []);
  useEffect(() => {
    startCloseTimer();
    return () => {
      clearCloseTimer();
    };
  }, [clearCloseTimer, id, startCloseTimer]);

  return (
    <div className='message-wrapper'>
      <div className={`message-title ${type}-title`}>{content}</div>
    </div>
  );
};

Message.defaultProps = {
  type: 'info',
};

export default Message;
