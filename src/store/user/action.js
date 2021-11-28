import { USER_LOGIN, USER_LOGOUT } from './type';

export const loginAction = (payload) => (dispatch) => {
  dispatch({ type: USER_LOGIN, payload });
};

export const logoutAction = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
