import { GET_SCORE, SET_SETTINGS, PLAY_AUDIO, TIMER } from "./actionTypes";
export const setSettings = (speed, size) => {
  return {
    type: SET_SETTINGS,
    payload: {
      speed: speed,
      size: size
    }
  };
};

export const getScore = score => {
  return {
    type: GET_SCORE,
    payload: score
  };
};

export const playAudio = audio => {
  return {
    type: PLAY_AUDIO,
    payload: audio
  };
};

export const timer = time => {
  return {
    type: TIMER,
    payload: time
  };
};
