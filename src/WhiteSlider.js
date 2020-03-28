import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const WhiteSlider = withStyles({
  root: {
    color: "#ffffff",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  },
  valueLabel: {
    left: "calc(-50% + 4px)",
    "& *": {
      color: "#000",
      backgroundColor: "#fff"
    }
  }
})(Slider);

export default WhiteSlider;
