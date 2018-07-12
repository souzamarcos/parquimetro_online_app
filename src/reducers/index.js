import { combineReducers } from 'redux';
import AppReducer from 'parquimetro-reducers/AppReducer';
import AutenticacaoReducer from 'parquimetro-reducers/AutenticacaoReducer';

export default combineReducers({
    AppReducer,
    AutenticacaoReducer,
});