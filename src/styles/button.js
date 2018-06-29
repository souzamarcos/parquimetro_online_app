import cores from './cores';

export const button = {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: cores.buttonBackgroundColor,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: cores.buttonBorderColor,
};
export const buttonText = {
    color: cores.buttonTextColor,
    textAlign:'center',
    fontSize: 16
};

export const buttonTransparent = {
    flex: 1,
    padding: 20,
    backgroundColor: cores.buttonTransparentBackgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: cores.buttonTransparentBorderColor,
};

export const buttonTransparentLeft = {
    ...buttonTransparent,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRightWidth: 0,
};

export const buttonTransparentRight = {
    ...buttonTransparent,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
};

export const buttonTransparentGroup = {
    flexDirection: 'row',
};

export const buttonTransparentText = {
    color: cores.textColor,
    textAlign:'center',
    fontSize: 16
};