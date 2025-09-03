import type { TextInputProps } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

export function Input({ ...props }: TextInputProps) {
  return (
    <TextInput
      {...props}
      mode="outlined"
      outlineStyle={{ borderRadius: 12 }}
      style={{ width: '80%' }}
      activeOutlineColor="#6B031D"
      outlineColor="#676767"
    />
  );
}
