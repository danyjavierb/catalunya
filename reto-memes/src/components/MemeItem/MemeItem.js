import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newMemeAction } from "../../state/misMemes.duck";
import { useHistory } from "react-router";

export default function MemeItem({ primerTexto, segundoTexto, meme }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function postMeme() {
    const newMeme = {
      template_id: meme.id,
      text0: primerTexto,
      text1: segundoTexto,
    };

    dispatch(newMemeAction(newMeme));
    history.push("/misMemes");
  }

  return (
    <div onClick={postMeme} className="meme-item">
      <img src={meme.url} className="meme-img" />
      <p className="meme-name"> {meme.name}</p>
    </div>
  );
}
