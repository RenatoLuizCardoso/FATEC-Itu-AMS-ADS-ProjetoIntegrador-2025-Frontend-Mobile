import { StatusBar } from 'expo-status-bar';
import type { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function Container({ children }: { children: ReactNode }) {
  return (
    <SafeAreaProvider style={style}>
      <SafeAreaView>
        {children}
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const { style } = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
});
