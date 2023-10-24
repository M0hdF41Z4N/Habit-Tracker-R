import React from "react";

function TimeSlotSelector({ selectedTime, onTimeChange }) {
  // Create an array of time slot labels
  const timeSlots = [
    "12:00 PM - 1:00 PM","1:00 PM - 2:00 PM","2:00 PM - 3:00 PM","3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM","5:00 PM - 6:00 PM","6:00 PM - 7:00 PM","7:00 PM - 8:00 PM",
    "8:00 PM - 9:00 PM","9:00 PM - 10:00 PM","10:00 PM - 11:00 PM","11:00 PM - 12:00 AM",
    "12:00 AM - 1:00 AM","1:00 AM - 2:00 AM","2:00 AM - 3:00 AM","3:00 AM - 4:00 AM",
    "4:00 AM - 5:00 AM","5:00 AM - 6:00 AM","6:00 AM - 7:00 AM","7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM","9:00 AM - 10:00 AM","10:00 AM - 11:00 AM","11:00 AM - 12:00 PM",
  ];

  return (
    <div className="col-auto">
      <div class="form-floating">
        <select
          className="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          value={selectedTime}
          onChange={onTimeChange}
        >
          {timeSlots.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label for="floatingSelect">Time Slots</label>
      </div>
    </div>
  );
}

export default TimeSlotSelector;
