import './App.css';
import Form from './components/Form';
import Myportfolio from './components/Myportfolio';
import Counter from './components/hooks/Counters.js';
import Focusinput from './components/hooks/Focusinput';
import Timer from './components/hooks/Timer';
import ToggleVisibility from './components/hooks/tasks/Toggle1.jsx';
import Toggle from './components/hooks/tasks/Toggle2.jsx';
import Callback from './components/hooks/tasks/Usecallback/Callback.jsx';
import SquareCalculator from './components/hooks/tasks/Usememo task.jsx';
import Usemesh from './components/hooks/tasks/Usememo task.jsx';
import Usecallback from './components/useCallback/Usecallback.jsx';
import Apps from './components/useMemo/useMemo.jsx';

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Myportfolio/> */}
      {/* <Counter/> */}
      {/* <Focusinput/> */}
      {/* <ToggleVisibility/> */}
      {/* <Timer/> */}
      {/* <Toggle/> */}
      {/* <Apps/> */}
      {/* <Usecallback/> */}
      {/* <SquareCalculator/> */}
      <Callback/>

  
      </div>
  );
}

export default App;
