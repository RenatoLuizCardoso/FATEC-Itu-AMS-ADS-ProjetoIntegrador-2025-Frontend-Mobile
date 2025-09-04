import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

type BottomBarProps = {
  children: ReactNode;
};

export function BottomBar({ children }: BottomBarProps) {
  return <Appbar style={styles.bottom}>{children}</Appbar>;
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
