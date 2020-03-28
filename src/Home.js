import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSettings } from "./redux/actions";
import WhiteSlider from "./WhiteSlider";

class Home extends Component {
  state = {
    value: 3,
    speeds: [0.5, 0.4, 0.3, 0.2, 0.1],
    size: 3
  };

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  onClick = size => {
    this.setState({ size });
  };
  setSettings = () => {
    this.props.setSettings(
      this.state.speeds[this.state.value - 1],
      this.state.size
    );
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        {/* {
          <font className="col-6" size="7" color="white">
            <br></br>
            Whack-A-
          </font> */}
        <img
          className="col-4"
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/WHACK-A-%20(2).png"
          alt="pepesi man"
        />
        <img
          className="col-1"
          src="https://raw.githubusercontent.com/Nerobeats/guac-a-mole/master/src/assets/bebsi-nobg.png"
          alt="pepesi man"
        />
        <div>
          <br />
          <br />
          <br />
          <br />

          <br></br>
          <div className="row justify-content-md-center border-0">
            <button
              type="button"
              class={
                this.state.size === 2
                  ? "btn btn-outline-light mr-3 btn-lg active"
                  : "btn btn-outline-light mr-3 btn-lg disabled"
              }
              onClick={() => this.onClick(2)}
            >
              2X2
            </button>
            <button
              type="button"
              class={
                this.state.size === 3
                  ? "btn btn-outline-light mr-3 btn-lg active"
                  : "btn btn-outline-light mr-3 btn-lg disabled"
              }
              onClick={() => this.onClick(3)}
            >
              3X3
            </button>
            <button
              type="button"
              class={
                this.state.size === 4
                  ? "btn btn-outline-light btn-lg mr-3 active"
                  : "btn btn-outline-light mr-3 btn-lg disabled"
              }
              onClick={() => this.onClick(4)}
            >
              4X4
            </button>
          </div>
          <div className="row justify-content-md-center border-0">
            <div className="col-2">
              <br></br>
              <br></br>
              <WhiteSlider
                defaultValue={3}
                min={1}
                step={1}
                max={5}
                onChange={this.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
              <font
                size="5"
                color="white"
                style={{ font: "8BITWONDERNominal" }}
              >
                speed
              </font>
            </div>
          </div>
          <br />
          <br />
          <Link
            to="/start/"
            className="btn btn-outline-light btn-lg mr-3 "
            onClick={this.setSettings}
          >
            <font size="6">start</font>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSettings: (speed, size) => dispatch(setSettings(speed, size))
  };
};

const mapStateToProps = state => {
  return {
    size: state.board.size
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
