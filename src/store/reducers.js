import { combineReducers } from 'redux';
import country from './country/reducer';
import user from './user/reducer';
import app from './app/reducer';

const reducers = { app, country, user };

export default combineReducers(reducers);
