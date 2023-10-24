import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HabitHeader from './Components/habit-header';
import HabitList from './Components/habit-list';
import { useState } from 'react';
import WeeklyView from './Components/weekly-view';
import { Provider } from 'react-redux';
import {store} from './redux/store';

function App() {
  // state to manage view 
  const [view, toggleView] = useState("Daily");

  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <HabitHeader view={view} toggleView={toggleView} />
          {view === "Daily" ? <HabitList /> : <WeeklyView />}
        </main>
      </div>
    </Provider>
  );
}

export default App;
