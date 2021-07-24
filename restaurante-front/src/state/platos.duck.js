import platosService from "../services/platos.service";

const TRAER_PLATOS_SUCCESS_TYPE = "TRAER_PLATOS_SUCCESS";
const TRAER_PLATOS_FAIL_TYPE = "TRAER_PLATOS_FAIL";

export const traerPlatosAction = () => (dispatch) => {
  return platosService
    .traerPlatos()
    .then((platos) => {
      // console.log(platos);
      dispatch({
        type: TRAER_PLATOS_SUCCESS_TYPE,
        payload: platos,
      });
      return Promise.resolve();
    })
    .catch((err) => {
      dispatch({
        type: TRAER_PLATOS_FAIL_TYPE,
      });
      return Promise.reject(err);
    });
};

export default function reducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case TRAER_PLATOS_SUCCESS_TYPE:
      console.log(state.concat(payload));
      return state.concat(payload);

    case TRAER_PLATOS_FAIL_TYPE:
      return {
        state,
      };
    default:
      return state;
  }
}
