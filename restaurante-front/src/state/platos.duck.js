import platosService from "../services/platos.service";

const TRAER_PLATOS_SUCCESS_TYPE = "TRAER_PLATOS_SUCCESS";
const TRAER_PLATOS_FAIL_TYPE = "TRAER_PLATOS_FAIL";

export const traerPlatosAction = () => (dispatch) => {
  return platosService
    .traerPlatos()
    .then((platos) => {
      dispatch({
        type: TRAER_PLATOS_SUCCESS_TYPE,
        payload: { platos },
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
      return {
        platos: state.concat(payload.platos),
      };
    case TRAER_PLATOS_FAIL_TYPE:
      return {
        platos: state,
      };
    default:
      return state;
  }
}
