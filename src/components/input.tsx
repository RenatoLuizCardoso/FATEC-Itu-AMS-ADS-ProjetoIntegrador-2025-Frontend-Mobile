import { TextInput, type TextInputProps } from 'react-native-paper';

export function Input({
  activeOutlineColor,
  mode,
  outlineColor,
  outlineStyle,
  style,
  ...props
}: TextInputProps) {
  return (
    <TextInput
      {...props}
      mode={mode ? mode : 'outlined'}
      outlineStyle={[{ borderRadius: 12 }, outlineStyle]}
      style={[{ width: '80%', backgroundColor: 'white' }, style]}
      activeOutlineColor={activeOutlineColor ? activeOutlineColor : '#6B031D'}
      outlineColor={outlineColor ? outlineColor : '#676767'}
    />
  );
}
