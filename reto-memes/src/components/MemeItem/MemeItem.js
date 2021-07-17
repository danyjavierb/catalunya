import React, { useEffect } from "react";

export function MemeItem({ primerTexto, segundoTexto, meme }) {
  function postMeme() {}

  return (
    <div className="meme-item">
      <img src={meme.url} className="meme-img" />
      <p className="meme-name"> {meme.name}</p>
    </div>
  );
}
