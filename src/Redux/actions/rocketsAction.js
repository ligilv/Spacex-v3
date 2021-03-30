import {
  GET_ROCKETS,
  GET_PAST_ROCKETS,
  GET_UPCOMING_ROCKETS,
  GET_ROCKETS_BY_DATE,
} from "./types";
import axios from "axios";

export const getRockets = () => async (dispatch) => {
  var result = await axios.get("https://api.spacexdata.com/v3/launches");
  dispatch({ type: GET_ROCKETS, payload: result.data });
};
export const getRocketsByDate = (start, end) => async (dispatch) => {
  var result = await axios.get(
    `https://api.spacexdata.com/v3/launches?start=${start}&end=${end}`
  );
  dispatch({ type: GET_ROCKETS_BY_DATE, payload: result.data });
};
export const getPastRockets = () => async (dispatch) => {
  var result = await axios.get("https://api.spacexdata.com/v3/launches/past");
  dispatch({ type: GET_PAST_ROCKETS, payload: result.data });
};

export const getUpcomingRockets = () => async (dispatch) => {
  var result = await axios.get(
    "https://api.spacexdata.com/v3/launches/upcoming"
  );
  dispatch({ type: GET_UPCOMING_ROCKETS, payload: result.data });
};
