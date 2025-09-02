import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card as PaperCard } from 'react-native-paper';

type CardProps = {
  children: ReactNode;
  onPress?: () => void;
};

export function Card({ children, onPress }: CardProps) {
  return (
    <PaperCard mode="outlined" style={styles.card} onPress={onPress}>
      <View style={styles.content}>{children}</View>
    </PaperCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F5F2',
    borderRadius: 12,
    marginVertical: 8,
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
});
