import React from "react";
import "./App.css";
import Home from "./Home";
import Board from "./Board";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import GameOver from "./GameOver";

const App = () => {
  return (
    <div>
      <div className="App">
        <Switch>
          <Route path="/home/" component={Home} />
          <Route path="/start/" component={Board} />
          <Route path="/gameover/" component={GameOver} />
          <Redirect to="/home/" />
        </Switch>
      </div>
      <div className="footer">
        <font color="white" size="2">
          &nbsp; Built by{" "}
          <a href="https://github.com/moe9195">Mohammad Rahmeh</a> and{" "}
          <a href="https://github.com/Nerobeats">Hani Hamshari</a>..{" "}
        </font>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

// 7otto kolo ya 3abood
const mapStateToProps = state => {
  return {
    speed: state.board.speed
  };
};
export default connect(mapStateToProps)(App);
