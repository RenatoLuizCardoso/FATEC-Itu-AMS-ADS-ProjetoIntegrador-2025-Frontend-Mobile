import { TextInput } from 'react-native-paper';

type InputProps = {
  label: string;
  onChange: () => void;
  value: string;
};

export function Input({ label, value, onChange }: InputProps) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChange={onChange}
      outlineStyle={{ borderRadius: 12 }}
      style={{ width: '80%' }}
      activeOutlineColor="#6B031D"
      outlineColor="#676767"
    />
  );
}
