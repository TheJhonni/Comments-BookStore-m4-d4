import "./App.css";
import MyFooter from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";
import DisplayBooks from "./components/DisplayBooks";

function App() {
  return (
    <div className="App">
      <MyNavbar
        payoff="Welcome to our BookStore!"
        links={["Book Genres", "Stores", "About us"]}
      />
      <WarningSign text="What are Props again?" />
      <MyBadge str="MyBadge is here" color="danger" />
      <SingleBook book={fantasy[0]} />
      <DisplayBooks books={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;
