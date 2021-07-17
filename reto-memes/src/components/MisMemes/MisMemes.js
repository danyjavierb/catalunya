import React from "react";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    misMemes: state.misMemes,
  };
};

export default connect(mapStateToProps, null)(MisMemes);
