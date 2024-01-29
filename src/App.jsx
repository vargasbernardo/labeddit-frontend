import { GlobalStyles } from "./GlobalStyles";
import GlobalState from "./context/GlobalState";
import Router from "./router/Router";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyles />
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
