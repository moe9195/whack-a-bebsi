import React, { Component } from "react";
import Hole from "./Hole";
import Timer from "./Timer";
import { connect } from "react-redux";
import { timer } from "./redux/actions";
import { getScore, setHighscore } from "./redux/actions";
import { Link, Redirect } from "react-router-dom";
import Sound from "react-sound";

class Board extends Component {
  state = {
    time: 0,
    cycle: true,
    mapping: [],
    highscore: 0
  };

  componentDidMount = () => {
    this.setState({ mapping: this.mapping(this.props.size) });
    this.interval = setInterval(
      () =>
        this.setState({
          cycle: !this.state.cycle,
          mapping: this.mapping(this.props.size)
        }),
      9000 * this.props.speed
    );
  };

  componentWillUnmount = () => {
    if (this.props.score > this.props.highscore) {
      this.props.setHighscore(this.props.score);
    }
    clearInterval(this.interval);
  };

  randomNum = size => {
    return Math.floor(Math.random() * (size * size));
  };

  reset = () => {
    this.props.timer(60);
    this.props.getScore(-this.props.score);
  };

  mapping = size => {
    let board = [],
      randNum = this.randomNum(size),
      count = 0;
    for (let j = 0; j < size; j++) {
      let arr = [];
      for (let i = 0; i < size; i++) {
        arr.push(
          <div className="col">
            <div className="text-center">
              <Hole
                key={this.props.speed}
                show={count === randNum ? true : false}
              />
            </div>
          </div>
        );
        count++;
      }
      board.push(<div className="row mt-2">{arr}</div>);
    }
    return board;
  };
  render() {
    if (this.props.time > 50) {
      return (
        <div className="container-fluid">
          <div className="fixed-top text-left">
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <font size="7" color="white">
              Score: {this.props.score}
            </font>
            <br></br>
            <Timer />
          </div>
          <Sound
            url="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/pepsi_man.mp3"
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
            volume={70}
          />
          <br />
          <div className="card border-0">
            <Link
              to="/"
              className="btn btn-outline-light btn-lg btn-home"
              onClick={() => this.reset()}
            >
              <font size="5">Home</font>
            </Link>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="container mapping">{this.state.mapping}</div>
        </div>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/gameover/",
            state: {
              score2: this.props.score,
              highscore2: this.props.highscore
            }
          }}
        />
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    size: state.board.size,
    score: state.board.score,
    speed: state.board.speed,
    time: state.board.time,
    highscore: state.board.highscore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    timer: time => dispatch(timer(time)),
    getScore: score => dispatch(getScore(score)),
    setHighscore: highscore => dispatch(setHighscore(highscore))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
