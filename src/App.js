import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import People from "./component/People";
import { Navbar } from "./component/Navbar";

export default function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const file = async () => {
      await axios
        .get(
          "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
        )
        .then((res) => {
          console.log(res.data.results);
          setPeople(res.data.results);
        });
    };
    file();
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <People allusers={people} />
        </Route>
      </Switch>
    </Router>
  );
}
