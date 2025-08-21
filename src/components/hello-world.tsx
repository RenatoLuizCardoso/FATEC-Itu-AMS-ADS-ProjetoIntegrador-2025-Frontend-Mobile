import { HorseIcon } from 'phosphor-react-native';
import { Text, View } from 'react-native';

export function HelloWorld() {
  return (
    <View className="flex flex-row items-center justify-center gap-2 rounded-xl bg-pink-500 p-3 align-middle">
      <HorseIcon color="white" weight="bold" />
      <Text className="font-bold text-lg text-white">Hello World</Text>
    </View>
  );
}
