import cores from './cores';

export const telaFull = {
    flex: 1,
    backgroundColor: cores.telaBackgroundColor,
};

export const telaCentralizada = {
    justifyContent: 'center',
    alignItems: 'center',
};

export const telaPaddingHorizontalGrande = {
    paddingHorizontal: 30,
};

export const telaPaddingVerticalGrande = {
    paddingVertical: 30,
};

export const telaPaddingHorizontalPequeno = {
    paddingHorizontal: 15,
};

export const telaPaddingVerticalPequeno = {
    paddingVertical: 15,
};

export const telaPaddingGrande = {
    ...telaPaddingHorizontalGrande,
    ...telaPaddingVerticalGrande
};

export const telaPaddingPequeno = {
    ...telaPaddingHorizontalPequeno,
    ...telaPaddingVerticalPequeno
};
