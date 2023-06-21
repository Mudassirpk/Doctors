import React from "react";

type Props = {
  selected: boolean;
};

function SelectBox({ selected }: Props) {
  return (
    <div
      className={`p-2 border-gray-300 border rounded-sm ${selected ? "bg-green-400" : "bg-white"}`}
    ></div>
  );
}

export default SelectBox;
