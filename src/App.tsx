import { HelloWorld } from '@components/hello-world';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <HelloWorld />
      <StatusBar style="auto" />
    </View>
  );
}
