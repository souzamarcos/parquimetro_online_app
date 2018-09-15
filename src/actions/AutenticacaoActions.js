import _ from 'lodash';
import API  from '../Api';
import { 
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO ,
    CADASTRO_EM_ANDAMENTO,
    DESLOGAR_USUARIO
} from './types';
import NavigationService from '../NavigationService';

export const modificaEmail = (texto) => {
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const autenticarUsuario = ({ email, senha }) => {

    return async dispatch => {
        dispatch({ type: LOGIN_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('usuario/login', {
                usuario: {
                    email,
                    password: senha
                }
            })
            console.log('usuario logado', retorno.data);
            if(_.isEmpty(retorno.data.usuario)){
                loginUsuarioErro(retorno.data.message, dispatch);
            }else{
                loginUsuarioSucesso(retorno.data.usuario, dispatch)
            }
        }
        catch (erro){
            loginUsuarioErro(erro.message, dispatch);
        }
    }
}

const loginUsuarioSucesso = (usuario, dispatch) => {
    
    dispatch ({
        type: LOGIN_USUARIO_SUCESSO,
        payload: usuario
    });

    if(usuario.grupo == 'Guarda'){
        NavigationService.navigate('TelaPrincipalGuarda');
    }else{
        NavigationService.navigate('TelaPrincipal');
    }    
}

const loginUsuarioErro = (mensagem, dispatch) => {
    dispatch ({
        type: LOGIN_USUARIO_ERRO,
        payload: mensagem
    });
}

export const deslogarUsuario = () => {
    NavigationService.navigate('TelaLogin');
    return {
        type: DESLOGAR_USUARIO,
    }
}