import { APP_LOADING } from './type';

export const appLoadingAction = (payload) => (dispatch) => {
  dispatch({ type: APP_LOADING, payload });
};
