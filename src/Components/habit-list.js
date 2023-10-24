import { habitSelector, toggleHabit } from '../redux/reducers/habit-reducer';
import {useDispatch,useSelector} from 'react-redux';
import getTodayDate from '../helper/todayDate';
import HabitAddForm from './habit-form';


export default function HabitList() {

  // creating dispatcher
  const dispatch = useDispatch();

  // Initializing selector
  const habitState = useSelector(habitSelector);
  // Getting habit state
  const {habits} = habitState;
  // Getting today date
  const todayDate = getTodayDate();

  // function to handle Checkbox change
  const handleChange = (e,i) => {
    e.preventDefault();
    e.target.checked = !e.target.checked;
    // dispatch the action
    dispatch(toggleHabit({index:i,provDate:todayDate}));
  };




  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="row">
        <div className="col ">
            <div className="list-group">
              {/*  Form to create Habit */}
              <HabitAddForm/>
              {/* Habits List */}
              {habits.length > 0 ? 
              habits.map((habit,i) => (
                // Habit checkbox
                <label className="list-group-item d-flex gap-3">
                <input
                  className="form-check-input flex-shrink-0" 
                  type="checkbox"
                  style={{ fontSize: "1.375em" }}
                  key={i}
                  onChange={(e)=>{handleChange(e,i)}}
                  checked={habit.dates[0].date == todayDate && habit.dates[0].status == "complete"}
                />
                <span className="pt-1 form-checked-content">
                  <strong>{habit.title}</strong>
                  <small className="d-block text-body-secondary">{habit.time}</small>
                </span>
              </label>
              )) : <div class="alert alert-primary" role="alert">
              Please add your first habit!
            </div>
              }
            </div>
        </div>
      </div>
    </div>
  );
}


