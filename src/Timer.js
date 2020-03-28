import React, { Component } from "react";
import { connect } from "react-redux";
import { timer } from "./redux/actions";

class Timer extends Component {
  componentDidMount = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => clearInterval(this.timerID);

  tick = () => {
    this.props.timer(this.props.time - 1);
  };

  render() {
    return (
      <div>
        <font size="7" color="white">
          {" "}
          &nbsp;&nbsp;&nbsp;Time: {this.props.time}
        </font>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    timer: time => dispatch(timer(time))
  };
};

const mapStateToProps = state => {
  return {
    time: state.board.time
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
