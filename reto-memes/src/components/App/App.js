import React, { useState } from "react";
import "./App.css";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { MemeItem } from "./../MemeItem/MemeItem";
import { MisMemes } from "../MisMemes/MisMemes";
import { connect } from "react-redux";
import usePrevious from "../hooks/usePrev";

function App(props) {
  const [memeLimit, setMemeLimit] = useState(8);
  //const [initialmMemeLimit, setInitialMemeLimit] = useState(0);
  const [primerTexto, setPrimerTexto] = useState("");
  const [seguntoTexto, setSegundoTexto] = useState("");

  return (
    <div>
      <h1>Creador de memes</h1>

      {/* <MisMemes /> */}

      <div>
        <h2>Ingrese textos:</h2>
        <Form>
          <FormGroup>
            <FormLabel>Primer Texto:</FormLabel>
            <FormControl
              type="text"
              onChange={(ev) => {
                setPrimerTexto(ev.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Segundo Texto:</FormLabel>
            <FormControl
              type="text"
              onChange={(ev) => {
                setSegundoTexto(ev.target.value);
              }}
            />
          </FormGroup>
        </Form>
      </div>

      <div>
        {props.memes.slice(0, memeLimit).map((meme) => (
          <MemeItem
            primerTexto={primerTexto}
            segundoTexto={seguntoTexto}
            key={meme.id}
            meme={meme}
          ></MemeItem>
        ))}
        <div
          className="meme-more"
          onClick={() => {
            setMemeLimit(memeLimit + 8);
          }}
        >
          cargar mas posibilidades...
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    memes: state.memes,
  };
};

export default connect(mapStateToProps, null)(App);
