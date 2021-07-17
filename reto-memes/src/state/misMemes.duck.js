import { username, password } from "../secrets";

const NEW_MEME_TYPE = "POST_NEW_MEME";

const postNewMeme = function (newMeme) {
  const formData = new URLSearchParams();
  formData.append("template_id", newMeme.template_id);
  formData.append("username", username);
  formData.append("password", password);
  formData.append("text0", newMeme.text0);
  formData.append("text1", newMeme.text1);

  const headers = new Headers();
  headers.append("Content-Type", "application/x-www-form-urlencoded");

  return fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    body: formData,
    headers,
  }).then((r) => r.json());
};

const newMeme = (json) => {
  return {
    type: NEW_MEME_TYPE,
    payload: json.data,
  };
};

export const newMemeAction = (newMeme) => {
  return (despachemesEsto) => {
    postNewMeme(newMeme).then((res) => despachemesEsto(newMeme(res)));
  };
};

export const misMemesReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_MEME_TYPE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default misMemesReducer;
