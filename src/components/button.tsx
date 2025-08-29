import type { ReactNode } from 'react';
import { Button as PaperButton } from 'react-native-paper';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

export function Button({ onPress }: ButtonProps) {
  return (
    <PaperButton
      mode="contained"
      buttonColor="#6B031D"
      onPress={() => onPress}
      labelStyle={{ fontSize: 20 }}
      style={{ borderRadius: 12, width: '80%' }}
    >
      Acessar
    </PaperButton>
  );
}
