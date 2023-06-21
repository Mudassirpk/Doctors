import React, { SetStateAction, MouseEvent } from "react";

type Props = {
  setTimeSlot: React.Dispatch<SetStateAction<string>>;
  defaultSlotValue: string;
  currentTimeSlot: string;
};

function Timeslot({ setTimeSlot, currentTimeSlot, defaultSlotValue }: Props) {
  function isSelected() {
    if (defaultSlotValue === currentTimeSlot) return true;
    return false;
  }
  return (
    <div
      onClick={() => setTimeSlot(defaultSlotValue)}
      className={`p-2 cursor-pointer hover:bg-blue-100 rounded-sm border-2 ${
        isSelected() ? "border-blue-500" : "border-gray-200"
      } `}
    >
      <span>{defaultSlotValue}</span>
    </div>
  );
}

export default Timeslot;
