import './App.css';
import Sidebar from "./Components/Sidebar"
import Feed from './Components/Feed';
import Weidgets from './Components/Weidgets';
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Weidgets/>
    </div>
  );
}

export default App;
