import "./App.css";
import MyFooter from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar
          payoff="Welcome to our BookStore!"
          links={["Book Genres", "Stores", "About us"]}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
