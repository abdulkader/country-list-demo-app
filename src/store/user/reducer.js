import { USER_LOGIN, USER_LOGOUT } from './type';

export const initialState = {
  loggedIn: false,
  user: null,
};

const userState = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      const newState = { ...state, loggedIn: true, user: action.payload };
      return newState;
    }
    case USER_LOGOUT: {
      const newState = { ...state, loggedIn: false, user: null };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default userState;
