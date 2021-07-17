import "./App.css";
import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { MemeItem } from "./../MemeItem/MemeItem";
import { MisMemes } from "../MisMemes/MisMemes";
function App() {
  return (
    <div>
      <h1>Creador de memes</h1>

      <MisMemes />

      <div>
        <h2>Ingrese textos:</h2>
        <Form>
          <FormGroup>
            <FormLabel>Primer Texto:</FormLabel>
            <FormControl type="text" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Segundo Texto:</FormLabel>
            <FormControl type="text" />
          </FormGroup>
        </Form>
      </div>

      <div>
        <MemeItem></MemeItem>
        <MemeItem></MemeItem>
        <MemeItem></MemeItem>
        <div className="meme-more"> cargar mas posibilidades... </div>
      </div>
    </div>
  );
}

export default App;
