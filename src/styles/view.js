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
    paddingHorizontal: '10%',
};

export const telaPaddingVerticalGrande = {
    paddingVertical: '10%',
};

export const telaPaddingHorizontalPequeno = {
    paddingHorizontal: '5%',
};

export const telaPaddingVerticalPequeno = {
    paddingVertical: '5%',
};

export const telaPaddingGrande = {
    ...telaPaddingHorizontalGrande,
    ...telaPaddingVerticalGrande
};

export const telaPaddingPequeno = {
    ...telaPaddingHorizontalPequeno,
    ...telaPaddingVerticalPequeno
};
