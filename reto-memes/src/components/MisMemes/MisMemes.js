import React from "react";

export function MisMemes(props) {
  return (
    <div className="misMemes">
      <h2>Mis Memes creados</h2>
      {props.misMemes.map((meme, index) => (
        <img key={index} src={meme.url} />
      ))}
    </div>
  );
}
