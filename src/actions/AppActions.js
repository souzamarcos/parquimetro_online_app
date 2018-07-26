import { 
    ALTERA_TITULO,
} from './types';

//alterar o título das telas que estão usando o Cabeçalho
export const alteraTitulo = (titulo) => {
    return {
        type: ALTERA_TITULO,
        payload: titulo
    }
};