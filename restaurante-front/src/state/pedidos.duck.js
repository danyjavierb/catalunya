import pedidosService from "../services/pedidos.service";
const ENVIAR_PEDIDO_SUCCESS = "ENVIAR_PEDIDO_SUCCESS";
const TRAER_PEDIDOS_SUCCESS = "TRAER_PEDIDOS_SUCCESS";
const TRAER_PEDIDOS_FAIL = "TRAER_PEDIDOS_FAIL";
const TRAER_PEDIDOS_FAIL_UNAUTHORIZED = "TRAER_PEDIDOS_FAIL_UNAUTHORIZED";

export const traerPedidosAction = () => (dispatch) => {
  return pedidosService
    .traerPedidos()
    .then((data) => {
      if (data.status === 401) {
        dispatch({
          type: TRAER_PEDIDOS_FAIL_UNAUTHORIZED,
          payload: { error: data },
        });
      } else {
        dispatch({
          type: TRAER_PEDIDOS_SUCCESS,
          payload: { pedidos: data },
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: TRAER_PEDIDOS_FAIL,
        payload: { error: err },
      });
    });
};

export const enviarPedidoAction = (cartItems, formaPago) => (dispatch) => {
  return pedidosService
    .crearPedido(cartItems, formaPago)
    .then((nuevoPedido) => {
      dispatch({
        type: ENVIAR_PEDIDO_SUCCESS,
        payload: nuevoPedido,
      });
      return Promise.resolve(nuevoPedido);
    });
};

const initialState = {
  misPedidos: [],
  pedidosDashboard: [],
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ENVIAR_PEDIDO_SUCCESS:
      return {
        ...state,
        misPedidos: state.misPedidos.concat(payload),
      };
    case TRAER_PEDIDOS_SUCCESS:
      return {
        ...state,
        pedidosDashboard: state.pedidosDashboard.concat(payload.pedidos),
      };
    case TRAER_PEDIDOS_FAIL_UNAUTHORIZED:
      return {
        ...state,
        error: payload,
      };
    case TRAER_PEDIDOS_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return initialState;
  }
}
