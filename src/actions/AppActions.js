import _ from 'lodash';
import { 
    ALTERA_TITULO,
} from 'parquimetro-actions/types';

//alterar o título das telas que estão usando o Cabeçalho
export const alteraTitulo = (titulo) => {
    return {
        type: ALTERA_TITULO,
        payload: titulo
    }
};