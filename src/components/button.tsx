import { type ButtonProps, Button as PaperButton } from 'react-native-paper';

export function Button(props: ButtonProps) {
  return (
    <PaperButton
      {...props}
      mode="contained"
      buttonColor="#6B031D"
      labelStyle={{ fontSize: 20 }}
      style={{ borderRadius: 12, width: '80%' }}
    />
  );
}
