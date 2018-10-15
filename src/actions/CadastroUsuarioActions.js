import API  from '../Api';
import { 
    MODIFICA_CADASTRO_USUARIO_NOME,
    MODIFICA_CADASTRO_USUARIO_SOBRENOME,
    MODIFICA_CADASTRO_USUARIO_EMAIL,
    MODIFICA_CADASTRO_USUARIO_CPF,
    MODIFICA_CADASTRO_USUARIO_SENHA,
    SALVAR_CADASTRO_USUARIO_EM_ANDAMENTO,
    SALVAR_CADASTRO_USUARIO_SUCESSO,
    SALVAR_CADASTRO_USUARIO_ERRO,
} from './types';
import { loginUsuarioSucesso } from './AutenticacaoActions'

import NavigationService from '../NavigationService';

export const cadastrarUsuario = (nome, sobrenome, email, cpf, senha) => {

    return async dispatch => {
        dispatch({ type: SALVAR_CADASTRO_USUARIO_EM_ANDAMENTO });
        try
        {
            const retorno = await API.post('usuario/novo',{
                cartao: {
                    nome,
                    sobrenome,
                    email,
                    cpf,
                    password: senha,
                    password_confirmation: senha
                }
            });
            console.log(retorno.data);
            cadastrarUsuarioSucesso(retorno.data, dispatch);
        }
        catch(erro)
        {
            console.log(erro.data);
            cadastrarUsuarioErro(erro.data.errors, dispatch);
        }
    }
}
export const modificaNome = (nome) => {
    return {
        type: MODIFICA_CADASTRO_USUARIO_NOME,
        payload: nome
    }
}

export const modificaSobrenome = (nome) => {
    return {
        type: MODIFICA_CADASTRO_USUARIO_SOBRENOME,
        payload: nome
    }
}

export const modificaEmail = (email) => {
    return {
        type: MODIFICA_CADASTRO_USUARIO_EMAIL,
        payload: email
    }
}

export const modificaCpf = (cpf) => {
    return {
        type: MODIFICA_CADASTRO_USUARIO_CPF,
        payload: cpf
    }
}

export const modificaSenha = (senha) => {
    return {
        type: MODIFICA_CADASTRO_USUARIO_SENHA,
        payload: senha
    }
}

export const cadastrarUsuarioSucesso = (usuario, dispatch) => {
    dispatch({
        type: SALVAR_CADASTRO_USUARIO_SUCESSO,
        payload: usuario
    });
    dispatch(loginUsuarioSucesso(usuario, dispatch));
}

export const cadastrarUsuarioErro = (erro, dispatch) => {
    dispatch({
        type: SALVAR_CADASTRO_USUARIO_ERRO,
        payload: erro
    });
}