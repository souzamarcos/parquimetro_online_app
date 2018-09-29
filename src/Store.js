import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import NavigationService from './NavigationService';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['AutenticacaoReducer']
    //version: 1,
    //stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const Store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk))
export const Persistor = persistStore(Store, {}, () => {
    
    const state = Store.getState();
    const usuarioLogado = state.AutenticacaoReducer.usuarioLogado;

    if(usuarioLogado){
        if(usuarioLogado.grupo == 'Guarda'){
            NavigationService.navigate('TelaPrincipalGuarda');
        }else{
            NavigationService.navigate('TelaPrincipal');
        } 
    }
});