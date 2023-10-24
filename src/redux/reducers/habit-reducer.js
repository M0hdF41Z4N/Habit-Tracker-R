import { createSlice} from "@reduxjs/toolkit";
import getTodayDate from "../../helper/todayDate";

// Initial state 
const initialState = {
    habits : []
}

// Creating Habit Slice
const habitSlice = createSlice({
    name:"habit",
    initialState,
    reducers : {
        // action to add habit 
        addHabit:(state,action) => {
            const {title,time} = action.payload;
            const dates = [{date : getTodayDate(),status : "complete"}]
            let newHabit = {title,time,dates};
            state.habits.push(newHabit);
        }
        // action to delete habit
        ,deleteHabit:(state,action) => {
            console.log("Deleting habit");
        }
        // action to toggle habit
        ,toggleHabit:(state,action) => {
            const {index,provDate}=action.payload;
            // if date is found or not
            let found = false;
            state.habits[index].dates.find((date) => {
                // Case 1 : date found and update the status
                if(date.date == provDate){
                    date.status = date.status == "complete"? "incomplete" : "complete";
                    found = true;
                    return true;
                }
            });
            // Case 2 : adding date to habit
            if (!found) {
                state.habits[index].dates.push({date : provDate,status : "complete"});
            }
        }
    }
})

// habit reducer
export const habitReducer = habitSlice.reducer;

// habit actions
export const {addHabit,deleteHabit,toggleHabit} = habitSlice.actions;

// habit selector
export const habitSelector = (state) => state.habit;
