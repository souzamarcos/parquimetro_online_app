
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


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

import { PermissionsAndroid } from 'react-native';

const persistConfig = {
    key: 'AutenticacaoReducer',
    storage,
    //version: 1,
    //stateReconciler: hardSet,
};
  
export default combineReducers({
    AppReducer,
    AutenticacaoReducer: persistReducer(persistConfig, AutenticacaoReducer),
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