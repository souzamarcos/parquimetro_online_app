import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from 'parquimetro-reducers';

export default createStore(reducers, {}, applyMiddleware(ReduxThunk));