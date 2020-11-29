import React, { ChangeEvent, FC, useState } from "react";

import Input, { InputType } from "./../Input/Input";

export interface IAutoCompleteProps {
  onChange?: (keyword: string) => void;
  onSelect?: (item: any) => void;
  dataSource: Array<string | number>;
}

const AutoComplete: FC<IAutoCompleteProps> = (props) => {
  const { onChange, onSelect, dataSource } = props;
  const [value, setValue] = useState<string>("");

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
      setShowList(false);
    }
  };

  return (
    <div>
      <Input onChange={changeHandler} value={value} />
      {showList && dataSource.length > 0 && value && (
        <ul>
          {dataSource.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  // console.log('sdadasd')
                  selectHandler(index);
                }}
              >
                {JSON.stringify(item)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
