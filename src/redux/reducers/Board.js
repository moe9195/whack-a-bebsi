import { GET_SCORE, SET_SETTINGS, PLAY_AUDIO, TIMER } from "../actions";

const initialState = { size: 3, score: 0, speed: 0.3, time: 60 };

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

    default:
      return state;
  }
};

export default reducer;
