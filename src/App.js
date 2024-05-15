import React, { Suspense } from "react";
import "./App.css";
import { DataProvider } from "./Context/DataContext";
import { Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader";

const Home = React.lazy(() => import("./Pages/Home"));
const ModelsView = React.lazy(() => import("./Pages/ModelsView"));

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes> 
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="fallback">
                    <Loader />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/:model"
            element={
              <Suspense
                fallback={
                  <div className="fallback">
                    <Loader />
                  </div>
                }
              >
                <ModelsView />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
