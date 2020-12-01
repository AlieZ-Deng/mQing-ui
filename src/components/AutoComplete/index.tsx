import React, { ChangeEvent, FC, useState, KeyboardEvent } from 'react';

import Input, { InputType } from './../Input/Input';

export interface IAutoCompleteProps {
  onChange?: (keyword: string) => void;
  onSelect?: (item: any) => void;

  dataSource: Array<string | number>;
}

const AutoComplete: FC<IAutoCompleteProps> = (props) => {
  const { onChange, onSelect, dataSource } = props;
  const [value, setValue] = useState<string>('');
  const [keyIndex, setKeyIndex] = useState<number>(0);

  const [showList, setShowList] = useState<boolean>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
    if (onChange) {
      if (!showList) {
        setShowList(true);
      }
      onChange(e.target.value.trim());
    }
  };

  const selectHandler = (index: number) => {
    if (onSelect) {
      onSelect(dataSource[index]);
      setValue(dataSource[index] as string);
      setShowList(false);
    }
  };

  const blurHandler = () => {
    setTimeout(() => {
      setShowList(false);
      setKeyIndex(0);
    }, 300);
  };

  const keyboardHandler = (e: KeyboardEvent<HTMLElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        if (keyIndex > 0) {
          setKeyIndex((keyIndex) => {
            setValue(dataSource[keyIndex - 1] as string);
            return keyIndex - 1;
          });
        }
        break;
      case 'ArrowDown':
        if (keyIndex < dataSource.length - 1) {
          setKeyIndex((keyIndex) => {
            setValue(dataSource[keyIndex + 1] as string);
            return keyIndex + 1;
          });
        }
        break;
      case 'Enter':
        selectHandler(keyIndex);
    }
  };

  return (
    <div onKeyDown={keyboardHandler} className='table'>
      <Input onChange={changeHandler} value={value} onBlur={blurHandler} />
      {showList && dataSource.length > 0 && value && (
        <div className='content-wrap'>
          <ul>
            {dataSource.map((item, index) => {
              return (
                <li
                  className={index === keyIndex ? 'active' : ''}
                  key={index}
                  onClick={() => {
                    selectHandler(index);
                  }}
                >
                  {item}
                  {/* {JSON.stringify(item)} */}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
