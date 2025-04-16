import { useRoutes } from "react-router-dom";
import AppHeader from "./components/app-header";
import routes from "./router";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense fallback="loading">
        <div className="page">
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
