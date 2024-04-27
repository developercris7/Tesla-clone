import "./App.css";
import { DataProvider } from "./Context/DataContext";
import Home from "./Pages/Home";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Home />
      </div>
    </DataProvider>
  );
}

export default App;
