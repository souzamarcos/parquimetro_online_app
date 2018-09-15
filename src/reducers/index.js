import { combineReducers } from 'redux';
import AppReducer from './AppReducer';
import AutenticacaoReducer from './AutenticacaoReducer';
import CartoesReducer from './CartoesReducer';
import VeiculosReducer from './VeiculosReducer';
import FormVeiculoReducer from './FormVeiculoReducer';
import FormCartaoReducer from './FormCartaoReducer';
import CadastroUsuarioReducer from './CadastroUsuarioReducer';
import ParquimetroReducer from './ParquimetroReducer';
import HistoricoReducer from './HistoricoReducer';
import ConsultaReducer from './ConsultaReducer';
import HistoricoGuardaReducer from './HistoricoGuardaReducer';
import PerguntasReducer from './PerguntasReducer';

export default combineReducers({
    AppReducer,
    AutenticacaoReducer,
    CartoesReducer,
    VeiculosReducer,
    FormVeiculoReducer,
    FormCartaoReducer,
    CadastroUsuarioReducer,
    ParquimetroReducer,
    HistoricoReducer,
    ConsultaReducer,
    HistoricoGuardaReducer,
    PerguntasReducer
});