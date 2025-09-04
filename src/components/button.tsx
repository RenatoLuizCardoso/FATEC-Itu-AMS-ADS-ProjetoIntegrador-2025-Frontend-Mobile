import { type ButtonProps, Button as PaperButton } from 'react-native-paper';

export function Button({
  buttonColor,
  labelStyle,
  mode,
  style,
  textColor,
  ...props
}: ButtonProps) {
  return (
    <PaperButton
      {...props}
      textColor={mode ? '#6B031D' : textColor}
      buttonColor={mode === 'text' ? '' : buttonColor ? buttonColor : '#6B031D'}
      labelStyle={[
        {
          fontSize: 20,
          textDecorationLine: 'underline',
          textDecorationColor: '#6B031D',
        },
        labelStyle,
      ]}
      style={[{ borderRadius: 12, width: '80%' }, style]}
      mode={mode ? mode : 'contained'}
    />
  );
}
