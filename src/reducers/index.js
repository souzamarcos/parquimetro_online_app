import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AutenticacaoReducer from './AutenticacaoReducer';
import CartoesReducer from './CartoesReducer';
import VeiculosReducer from './VeiculosReducer';


export default combineReducers({
    AppReducer,
    AutenticacaoReducer,
    CartoesReducer,
    VeiculosReducer
});