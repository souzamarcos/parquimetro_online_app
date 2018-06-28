import { 
    ALTERA_TITULO,
} from 'parquimetro-actions/types';

const INITIAL_STATE = {
    titulo: 'Pessoal',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ALTERA_TITULO:
            return { ...state, titulo: action.payload }
        default:
            return state;
    }    
}