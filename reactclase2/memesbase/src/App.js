import logo from "./logo.svg";
import "./App.css";
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
function App() {
  return (
    <div>
      <h1>Meme generator</h1>
      <img alt="algo" src="https://i.imgflip.com/5gpwqp.jpg" />
      <h3>
        <i>Insert some texts</i>
      </h3>
      <Form>
        <FormGroup>
          <FormLabel>Top</FormLabel> <FormControl type="text" />
        </FormGroup>
        <FormGroup>
          <FormLabel>Bottom</FormLabel> <FormControl type="text" />
        </FormGroup>
      </Form>
      <div className="meme-item">
        <img
          className="meme-img"
          alt="algo"
          src="https://i.imgflip.com/30b1gx.jpg"
        />
        <p className="meme-name">nombre</p>
      </div>
      <div className="meme-button">load more...</div>
    </div>
  );
}

export default App;
