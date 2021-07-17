import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const RECEIVE_MEMES_TYPE = "RECEIVE_MEMES";

const fetchMemesJson = () => {
  return fetch("https://api.imgflip.com/get_memes").then((res) => res.json());
};

export function receiveMemesAction() {
  return function (dispatch) {
    return fetchMemesJson().then((json) => dispatch(receiveMemes(json)));
  };
}

export const receiveMemesAction2 = createAsyncThunk(
  RECEIVE_MEMES_TYPE,
  async () => {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const json = await response.json();
    return json.data.memes;
  }
);

// export const receiveMemesAction = () => (dispatch) =>
// fetchMemesJson().then((json) => dispatch(receiveMemes(json)));

const receiveMemes = (json) => {
  const memes = json.data.memes;

  return {
    type: RECEIVE_MEMES_TYPE,
    payload: memes,
  };
};

function reducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMES_TYPE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default reducer;
