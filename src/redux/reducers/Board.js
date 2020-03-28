import {
  GET_SCORE,
  SET_SETTINGS,
  PLAY_AUDIO,
  TIMER,
  SET_HIGHSCORE
} from "../actions";

const initialState = { size: 3, score: 0, speed: 0.3, time: 60, highscore: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        speed: action.payload.speed,
        size: action.payload.size
      };
    case GET_SCORE:
      return {
        ...state,
        score: action.payload + state.score
      };
    case PLAY_AUDIO:
      return {
        ...state,
        score: action.payload
      };
    case TIMER:
      return {
        ...state,
        time: action.payload
      };
    case SET_HIGHSCORE:
      return {
        ...state,
        highscore: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
