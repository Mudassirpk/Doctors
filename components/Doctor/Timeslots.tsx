import React, { SetStateAction } from "react";

import Timeslot from "./Timeslot";

type Props = {
  setTimeSlot: React.Dispatch<SetStateAction<string>>;
  currentTimeSlot: string;
};

function Timeslots({ setTimeSlot, currentTimeSlot }: Props) {
  return (
    <div className="p-4 justify-center rounded-sm border border-gray-300 flex flex-wrap gap-2">
      <Timeslot
        currentTimeSlot={currentTimeSlot}
        defaultSlotValue="9AM - 10AM"
        setTimeSlot={setTimeSlot}
      />
      <Timeslot
        currentTimeSlot={currentTimeSlot}
        defaultSlotValue="10AM - 11AM"
        setTimeSlot={setTimeSlot}
      />
      <Timeslot
        currentTimeSlot={currentTimeSlot}
        defaultSlotValue="11AM - 12PM"
        setTimeSlot={setTimeSlot}
      />
      <Timeslot
        currentTimeSlot={currentTimeSlot}
        defaultSlotValue="1AM - 2PM"
        setTimeSlot={setTimeSlot}
      />
      <Timeslot
        currentTimeSlot={currentTimeSlot}
        defaultSlotValue="2AM - 3PM"
        setTimeSlot={setTimeSlot}
      />
    </div>
  );
}

export default Timeslots;
