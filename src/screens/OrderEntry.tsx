import { Button, Container, Input } from '@components';
import { TicketContext } from 'contexts';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function OrderEntry() {
  const [tableNumber, setTableNumber] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');

  return (
    <TicketContext.Provider value={{ tableNumber, ticketNumber }}>
      <Container showNav>
        <View style={styles.view}>
          <View style={styles.subView}>
            <Text style={styles.title}>Seja Bem Vindo!</Text>
            <Text style={styles.subTitle}>Efetue seu login</Text>
          </View>

          <View style={[styles.subView, { gap: 24 }]}>
            <Input
              keyboardType="numeric"
              value={tableNumber}
              onChangeText={(text) => setTableNumber(text)}
              label="Nº Mesa"
            />
            <Input
              keyboardType="numeric"
              value={ticketNumber}
              onChangeText={(text) => setTicketNumber(text)}
              label="Nº Comanda"
            />
            <Button onPress={() => {}}>Acessar</Button>
          </View>
        </View>
      </Container>
    </TicketContext.Provider>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#6B031D',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitle: {
    color: '#676767',
  },
  view: {
    flex: 1,
    gap: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subView: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#6B031D',
  },
});
