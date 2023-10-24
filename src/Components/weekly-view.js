import { useDispatch, useSelector } from "react-redux";
import getLast7Days from "../helper/weeklyDates";
import { habitSelector , toggleHabit } from "../redux/reducers/habit-reducer";

export default function WeeklyView() {

    // Creating dispatcher
    const dispatch = useDispatch();
    // Initializing selector
    const habitState = useSelector(habitSelector);
    // Getting habits
    const {habits} = habitState;

    // Function to handle : toggle habit status
    const handleClick = (e,i,provDate) => {
      e.preventDefault();
      // dispatch the action
      dispatch(toggleHabit({index:i,provDate:provDate}));
    }

    // Getting last 7 days
    const dates = getLast7Days();
    // All months
    let months = ["","Jan", "Feb", "March", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    // Dates to show on table header
    let stringdates = dates.map(date => months[date.split("-")[1]]+" " + date.split("-")[2]);

  return (
    <div className="container my-5">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Habit Title</th>
            {stringdates.map((date, i) => (
              <th key={date} scope="col">
                {" "}
                {date}{" "}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.length > 0 ? 
          habits.map((habit, i) => (
            <>
              <tr class="table-fill" key={i}>
                <td> {i + 1} </td>
                <td> {habit.title} </td>
                {dates.map((date) => {
                  let found = false;
                  let status = "none";
                  habit.dates.find((item) => {
                    if (item.date === date) {
                      found = true;
                      status = item.status;
                    }
                  });

                //   Case 1 : status completed
                  if (found && status === "complete") {
                    return (
                      <td key={date}>
                        <button className="btn" type="button" onClick={(e)=>{handleClick(e,i,date,)}}>
                        <i
                          class="bi bi-check2-circle"
                          style={{ color: "rgb(130, 189, 107)" }}

                        ></i>
                        </button>
                      </td>
                    );
                  }
                //   Case 2 : date not found or status is none
                  if (!found || (found && status === "none")) {
                    return (
                      <td key={date}>
                        <button className="btn" type="button" onClick={(e)=>{handleClick(e,i,date,)}}>
                        <i
                          class="bi bi-circle"
                          style={{ color: "rgb(0, 0, 255)" }}
                          
                        ></i>
                        </button>
                      </td>
                    );
                  }
                // Case 3 : status is incomplete  
                  if (found && status === "incomplete") {
                    return (
                      <td key={date}>
                        <button className="btn" type="button" onClick={(e)=>{handleClick(e,i,date,)}}>
                        <i
                          class="bi bi-x-circle"
                          style={{ color: "rgb(241, 121, 109)" }}
                        ></i></button>
                      </td>
                    );
                  }
                })}
              </tr>
            </>
          )) :  <>
            <tr class="table-fill">
              <td colSpan={9}> 
              <div class="alert alert-danger text-center" role="alert">
              No Data Found
</div>
              </td>
              </tr>
            </>}
        </tbody>
      </table>
    </div>
  );
}
