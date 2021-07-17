import React, { useState } from "react";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import MemeItem from "../MemeItem/MemeItem";
import { useSelector } from "react-redux";

export default function CrearMeme() {
  const [memeLimit, setMemeLimit] = useState(8);
  //const [initialmMemeLimit, setInitialMemeLimit] = useState(0);
  const [primerTexto, setPrimerTexto] = useState("");
  const [seguntoTexto, setSegundoTexto] = useState("");

  const memes = useSelector((state) => state.memes);

  return (
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

      {memes.slice(0, memeLimit).map((meme) => (
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
  );
}
