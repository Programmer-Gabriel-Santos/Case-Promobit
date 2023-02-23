import React from "react"
import Router from "./routes/Router"
import GlobalState from './Global/GlobalState'

const App = () => {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
