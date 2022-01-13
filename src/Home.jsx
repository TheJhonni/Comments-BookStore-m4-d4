import React from "react";
import fantasy from "./data/fantasy.json";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import DisplayBooks from "./components/DisplayBooks";

function Home() {
  return (
    <>
      <WarningSign text="What are Props again?" />
      <MyBadge str="MyBadge is here" color="primary" />
      <SingleBook book={fantasy[0]} />
      <DisplayBooks books={fantasy} />
    </>
  );
}

export default Home;
