import React from "react";
import { useSelector } from "react-redux";

export default function MisMemes() {
  const misMemes = useSelector((state) => state.misMemes);

  return (
    <div className="misMemes">
      <h2>Mis Memes creados</h2>
      {misMemes.map((meme, index) => (
        <img key={index} src={meme.url} />
      ))}
    </div>
  );
}
