import React, { Component } from "react";
import { getScore } from "./redux/actions";
import { connect } from "react-redux";

export class Hole extends Component {
  state = {
    up: false,
    counter: 0,
    clicked: true
  };

  peep = () => {
    if (this.state.counter < 2) {
      this.setState({
        up: !this.state.up,
        counter: this.state.counter + 1
      });
    } else {
      this.setState({ counter: 0, clicked: true });
    }
  };

  componentDidMount() {
    this.interval = setInterval(this.peep, 3000 * this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  whack = () => {
    if (this.state.clicked) {
      let audio = new Audio(
        "https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/ahh-male-loud.mp3"
      );
      audio.volume = 1;
      audio.play();
      this.props.getScore(1);
      this.setState({
        clicked: false
      });
    }
  };

  render() {
    const mole = (
      <img
        src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/bebsi-nobg.png"
        alt="mole"
        className={
          this.state.up && this.state.clicked
            ? "mole-pic-up"
            : !this.state.up && this.state.clicked
            ? "mole-pic-down"
            : this.state.up && !this.state.clicked
            ? "mole-pic-up animated wobble"
            : !this.state.up && !this.state.clicked
            ? "mole-pic-down animated wobble"
            : null
        }
        onClick={this.whack}
        style={{ transition: `bottom ${this.props.speed}s ease` }}
      />
    );
    return (
      <div className="box">
        {this.props.show ? mole : <></>}
        <img
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/cropped_ice.png"
          alt="mound"
          className="mound-pic"
        />
        <div className="mask"></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.board.score,
    speed: state.board.speed,
    size: state.board.size
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getScore: score => dispatch(getScore(score))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hole);
