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

export const botaoTransparent = {
    flex: 1,
    padding: 20,
    backgroundColor: cores.botaoTransparentBackgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: cores.botaoTransparentBorderColor,
};

export const botaoTransparentLeft = {
    ...botaoTransparent,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRightWidth: 0,
};

export const botaoTransparentRight = {
    ...botaoTransparent,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
};

export const botaoTransparentGroup = {
    flexDirection: 'row',
};

export const botaoTransparentText = {
    color: cores.textColor,
    textAlign:'center',
    fontSize: 16
};