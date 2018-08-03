import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AutenticacaoReducer from './AutenticacaoReducer';
import CartoesReducer from './CartoesReducer';
import VeiculosReducer from './VeiculosReducer';
import FormVeiculoReducer from './FormVeiculoReducer';
import FormCartaoReducer from './FormCartaoReducer';
import CadastroUsuarioReducer from './CadastroUsuarioReducer';


export default combineReducers({
    AppReducer,
    AutenticacaoReducer,
    CartoesReducer,
    VeiculosReducer,
    FormVeiculoReducer,
    FormCartaoReducer,
    CadastroUsuarioReducer
});