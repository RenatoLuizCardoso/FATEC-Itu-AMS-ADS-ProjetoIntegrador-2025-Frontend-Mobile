import { useNavigation } from '@react-navigation/native';
import { TicketContext } from 'contexts';
import { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import type { NavProps } from 'routes';

export function Navbar() {
  const navigation = useNavigation<NavProps>();
  const context = useContext(TicketContext);

  return (
    <Appbar.Header>
      <Appbar.Action
        size={32}
        color="#6B031D"
        icon="arrow-left"
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content
        title={`Comanda ${context.ticketNumber}`}
        titleStyle={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}
      />
      <Appbar.Action
        size={32}
        color="#6B031D"
        icon="cart-outline"
        onPress={() => navigation.navigate('HelloWorld')}
      />
    </Appbar.Header>
  );
}
