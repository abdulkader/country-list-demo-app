import { APP_LOADING } from './type';

export const initialState = {
  loading: true,
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING: {
      const newState = { ...state, loading: action.payload };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default userState;
