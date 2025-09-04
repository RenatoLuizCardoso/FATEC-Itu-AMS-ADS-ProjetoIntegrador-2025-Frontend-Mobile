import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import type { NavProps } from 'routes';

export function Navbar({ title }: { title: string }) {
  const navigation = useNavigation<NavProps>();

  return (
    <Appbar
      mode="center-aligned"
      style={{ backgroundColor: 'white', height: 56 }}
    >
      <Appbar.Action
        color="#6B031D"
        icon="arrow-left"
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content title={title} />
      <Appbar.Action
        color="#6B031D"
        icon="cart-outline"
        onPress={() => navigation.navigate('HelloWorld')}
      />
    </Appbar>
  );
}
