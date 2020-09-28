import React from "react";

interface IType {
  name: string;
}

const A: React.FC<IType> = ({ name }) => {
  return <div>{name}</div>;
};

export default A;
