import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HabitHeader from './Components/habit-header';
import HabitList from './Components/habit-list';

function App() {
  return (
    <div className="App">
      <HabitHeader />
      <main>
        <div className="Container-fluid">
        <HabitList/>
        </div>
        
      </main>
        
    </div>
  );
}

export default App;
