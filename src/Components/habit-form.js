import TimeSlotSelector from "./time-selector";
import {useRef, useState} from 'react';
import { addHabit } from '../redux/reducers/habit-reducer';
import {useDispatch} from 'react-redux';

export default function HabitAddForm() {

    // creating dispatcher
  const dispatch = useDispatch();

    // Habit input reference
  const habitInputRef = useRef(null);

    // state for time slots
  const [selectedTime, setSelectedTime] = useState('1:00 PM - 2:00 PM');
  // Function to handle time slots
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Function to handle submit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // dispatch the action
    dispatch(addHabit(
      {title:habitInputRef.current.value
        ,time:selectedTime}));
    // reset the values
    habitInputRef.current.value = ""; 
  }




    return (
        <form
                className="row g-3 list-group-item d-flex gap-3 bg-body-tertiary"
                onSubmit={handleOnSubmit}
              >
                {/* Habit title input */}
                <div className="col-auto">
                  <label htmlFor="title" className="visually-hidden">
                    Enter the habit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter the habit"
                    ref={habitInputRef}
                    required
                  />
                </div>
                {/* Time slot input */}
                <TimeSlotSelector selectedTime={selectedTime} onTimeChange={handleTimeChange} />
                <div className="col-auto">
                    {/* Add Habit button */}
                  <button type="submit" className="btn btn-primary mb-3">
                    Add habit
                  </button>
                </div>
              </form>
    );
}