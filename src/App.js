import "./App.css";
import { DataProvider } from "./Context/DataContext";
import Home from "./Pages/Home";
import ModelsView from "./Pages/ModelsView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:model" element={<ModelsView />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
