import { Navbar } from '@components';
import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Portal } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type ContainerProps = {
  children: ReactNode;
  showNav?: boolean | false;
};

export function Container({ children, showNav }: ContainerProps) {
  return (
    <Portal.Host>
      <SafeAreaProvider style={style}>
        <SafeAreaView style={style}>
          {showNav && <Navbar title="Comanda 40" />}
          {children}
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </Portal.Host>
  );
}

const { style } = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
});
