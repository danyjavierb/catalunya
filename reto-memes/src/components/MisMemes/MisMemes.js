import React from "react";

function MisMemes({ misMemes }) {
  return (
    <div className="misMemes">
      <h2>Mis Memes creados</h2>
      {misMemes.map((meme, index) => (
        <img key={index} src={meme.url} />
      ))}
    </div>
  );
}
