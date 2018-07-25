import { combineReducers } from 'redux';
import AppReducer from 'parquimetro-reducers/AppReducer';
import AutenticacaoReducer from 'parquimetro-reducers/AutenticacaoReducer';
import CartoesReducer from 'parquimetro-reducers/CartoesReducer';

export default combineReducers({
    AppReducer,
    AutenticacaoReducer,
    CartoesReducer
});