import React, { useEffect } from "react";
import { connect } from "react-redux";
import { newMemeAction } from "../../state/misMemes.duck";

function MemeItem({ primerTexto, segundoTexto, meme, crearNuevoMeme }) {
  function postMeme() {
    const newMeme = {
      template_id: meme.id,
      text0: primerTexto,
      text1: segundoTexto,
    };
    debugger;
    crearNuevoMeme(newMeme);
  }

  return (
    <div onClick={postMeme} className="meme-item">
      <img src={meme.url} className="meme-img" />
      <p className="meme-name"> {meme.name}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    crearNuevoMeme: (newMeme) => dispatch(newMemeAction(newMeme)),
  };
};

export default connect(null, mapDispatchToProps)(MemeItem);
