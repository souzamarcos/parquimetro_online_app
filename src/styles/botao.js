import cores from './cores';

export const botao = {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: cores.botaoBackgroundColor,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: cores.botaoBorderColor,
};

export const botaoAzul = {
    ...botao,
    backgroundColor: cores.azul,
};

export const botaoVerde = {
    ...botao,
    backgroundColor: cores.verde,
};

export const botaoBranco = {
    ...botao,
    backgroundColor: cores.branco,
};

export const botaoVermelho = {
    ...botao,
    backgroundColor: cores.vermelho,
};

export const botaoText = {
    color: cores.botaoTextColor,
    textAlign:'center',
    fontSize: 16
};

export const botaoAzulText = {
    ...botaoText,
    color: cores.branco,
};

export const botaoVerdeText = {
    ...botaoText,
    color: cores.branco,
};

export const botaoVermelhoText = {
    ...botaoText,
    color: cores.branco,
};