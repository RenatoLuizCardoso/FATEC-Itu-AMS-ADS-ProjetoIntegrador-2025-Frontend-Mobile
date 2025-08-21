import { HelloWorld } from '@components/hello-world';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="justify-center flex-1 items-center">
      <HelloWorld />
      <StatusBar style="auto" />
    </View>
  );
}
