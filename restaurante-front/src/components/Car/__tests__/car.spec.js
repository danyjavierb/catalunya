import { render, fireEvent, waitFor, getByText } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import Car from "../Car";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("tests carrito", () => {
  const ADD_UNIT_TYPE = "ADD_UNIT";
  const REMOVE_UNIT_TYPE = "REMOVE_UNIT";

  const store = mockStore({
    cart: [
      {
        id: 1,
        nombre: "hamburguesa sencilla",
        precio: 10000,
        cantidad: 2,
      },
    ],
  });

  it("Carrito debe mostrar precio total", () => {
    const { container } = render(
      <Provider store={store}>
        <Car />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(screen.getByText("Total: 20000")).toBeInTheDocument();
  });

  it("al presionar el boton + se debe despachar ADD_UNIT_TYPE", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Car />
      </Provider>
    );

    const expectedAction = [
      {
        type: ADD_UNIT_TYPE,
        payload: {
          id: 1,
          nombre: "hamburguesa sencilla",
          precio: 10000,
          cantidad: 2,
        },
      },
    ];

    const button = getByTestId("add_1");
    fireEvent.click(button);
    expect(store.getActions()).toEqual(expectedAction);
  });
});
