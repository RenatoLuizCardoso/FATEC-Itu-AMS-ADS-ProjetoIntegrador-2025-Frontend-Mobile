import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

type BottomBarProps = {
  children: ReactNode;
};

export function BottomBar({ children }: BottomBarProps) {
  return <Appbar.Header style={styles.bottom}>{children}</Appbar.Header>;
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'white',
    position: 'absolute',
    padding: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
