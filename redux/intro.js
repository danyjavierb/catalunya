/*
 *
 *  Flux:
 *      -Redux:
 *      Contenedor de estado (predecible, inmutable, testeable) para JS (cliente, nodejs, react native)
 *        - uso:
 *          Vanilla
 *          React (react-redux)
 *          Angular (ng-redux)
 *        - Creador : Dan Abramov
 *          - Inspiracion: ELM y de FLUX
 *          - Mueven el estado del arte actual de la programacion, viene de la FP
 *          - hacer predeciibles las mutaciones de estado
 *        - Tres pincipios basicos:
 *              - Source of truth (fuente unica de verdad)
 *                  todo el estado de la aplicacion se almacena en un arbol que recide (vive) en un STORE
 *              - El estado es inmutable (de solo lectura)
 *                  solo podemos modificar el estado emitiendo una accion, es decir un objeto describiendo que
 *                  o como va a cambiar el estado.
 *              - Los cambios se realizan mediante funciones puras
 *                  para nosotros poder transformar el estado a otro, lo haremos mediante funciones
 *                  que tomen el estado anterior, analicen que accion tomar y creen la nueva version del estado
 *                  a estan funciones les llamamos "REDUCERS"
 *       - Profundizar en la motivacion de REDUX
 *             - FLUX
 *             - ELM
 *             - Inmutabilidad
 *             - Categorias
 *             - RX
 */

const { createStore } = require("redux");

/**
 *
 * un reducer es una funcion pura con el formato  (state, action) => newState //ELM
 * un reducer muestra o describe como una accion trasnforma el estado en un nuevo estado
 *
 * como luce el estado?
 * es lo que ustedes quieran q sea, pero es normal tener un array de objetos pero podria ser
 * un valor nativo (numero, string).... cualquier estructura de datos que quieran
 *
 */

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.number;
    case "DECREMENT":
      return state - action.number;
    default:
      return state;
  }
}

//crear el store de redux (mantener el estado de esta app)
// { subscribe, dispatch, getState }
const store = createStore(counterReducer);

// para testar los cambios en el estado podemos uar subscribe

store.subscribe(() => {
  console.log(store.getState());
});

//parametrizar los actions, creacion de action creators
const incrementBy = (number) => {
  return {
    type: "INCREMENT",
    number,
  };
};

const decrementBy = (number) => {
  return {
    type: "DECREMENT",
    number,
  };
};

// la forma para modificar el estado es despachando acciones
store.dispatch(incrementBy(10));
//10
store.dispatch(incrementBy(10));
//20

store.dispatch(decrementBy(20));
//0 
