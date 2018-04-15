import colors from './colors';

export const button = {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.buttonBackgroundColor,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.buttonBorderColor,
};
export const buttonText = {
    color: colors.buttonTextColor,
    textAlign:'center',
    fontSize: 16
};

export const buttonTransparent = {
    flex: 1,
    padding: 20,
    backgroundColor: colors.buttonTransparentBackgroundColor,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.buttonTransparentBorderColor,
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
    color: colors.textColor,
    textAlign:'center',
    fontSize: 16
};