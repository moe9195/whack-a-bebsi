import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getScore, timer } from "./redux/actions";

const GameOver = props => {
  const reset = props => {
    props.timer(60);
    props.getScore(-props.score);
  };
  return (
    <div className="container-fluid">
      <br></br>
      <br></br>
      <br></br>
      <img
        className="col-6"
        src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/GAME-OVER.png"
        alt="game-over"
      />
      <br></br>
      <br></br>
      <font size="7" color="white">
        Highscore : {props.highscore}
        <br></br>
        Score : {props.location.state.score2}
      </font>
      <div className="row">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-4">
          <br></br>
          <br></br>
          <br></br>
          <div>
            <img
              className="col-6"
              src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/crushed%20pepsi.png"
              alt="crushed-pepsi"
            />
          </div>
          <font size="7" color="white"></font>
        </div>
        <div className="col-4">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link
            to="/home/"
            type="button"
            class="btn btn-outline-light mr-3 btn-lg"
            onClick={reset(props)}
          >
            <font size="5">Home</font>
          </Link>
          <Link
            to="/start/"
            type="button"
            class="btn btn-outline-light mr-3 btn-lg"

            // onClick={}
          >
            <font size="5">Try Again</font>
          </Link>
        </div>
        <img
          className="col-4"
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/pepsi_man_stop-removebg-preview.png"
          alt="pepsi-man"
        />
      </div>
    </div>
  );
};
const mapToStateToProps = state => {
  return {
    score: state.board.score,
    size: state.board.size,
    speed: state.board.speed,
    highscore: state.board.highscore
  };
};
const mapDispatchToProps = dispatch => {
  return {
    timer: time => dispatch(timer(time)),
    getScore: score => dispatch(getScore(score))
  };
};
export default connect(mapToStateToProps, mapDispatchToProps)(GameOver);
