import { Button, Container, Divider, Input, Modal } from '@components';
import { TicketContext } from '@contexts';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NavProps } from 'routes';

export function OrderEntry() {
  const [tableNumber, setTableNumber] = useState('');
  const [newTableNumber, setNewTableNumber] = useState('');
  const [oldTableNumber, setOldTableNumber] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [modalVisibility, setModalVisibility] = useState(false);

  const navigation = useNavigation<NavProps>();

  const handleChangeModalVisibility = () => {
    setModalVisibility((prev) => !prev);
  };

  const handleChangeTable = () => {
    setTableNumber(newTableNumber);
    setNewTableNumber('');
    setOldTableNumber('');
    handleChangeModalVisibility();
  };

  const handleLogOut = () => {
    navigation.navigate('Login');
  };

  return (
    <TicketContext.Provider value={{ tableNumber, ticketNumber }}>
      <Container>
        <View style={styles.view}>
          <View style={styles.subView}>
            <Text style={styles.title}>Começar o Atendimento</Text>
          </View>

          <View style={[styles.subView, { gap: 36 }]}>
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
            <View style={[styles.subView, { gap: 12 }]}>
              <Button onPress={() => {}}>Realizar pedido</Button>
              <Divider label="ou" />
              <Button onPress={handleChangeModalVisibility}>
                Alterar mesa
              </Button>
              <Button
                mode="text"
                onPress={handleLogOut}
                style={{ width: 'auto' }}
              >
                Sair
              </Button>
            </View>
          </View>
        </View>
        <Modal
          contentContainerStyle={{ gap: 12 }}
          visible={modalVisibility}
          onDismiss={handleChangeModalVisibility}
        >
          <Input
            keyboardType="numeric"
            value={oldTableNumber}
            label="Nº Antigo"
            onChangeText={(text) => setOldTableNumber(text)}
          />
          <Input
            keyboardType="numeric"
            value={newTableNumber}
            label="Nº Novo"
            onChangeText={(text) => setNewTableNumber(text)}
          />
          <Button onPress={handleChangeTable}>Alterar</Button>
        </Modal>
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
