import "./App.scss";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
