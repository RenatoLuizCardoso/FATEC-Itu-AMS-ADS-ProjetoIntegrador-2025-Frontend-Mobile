import { Button, Container, Input } from '@components';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Login() {
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  return (
    <Container>
      <View style={styles.view}>
        <View style={styles.subView}>
          <Text style={styles.title}>Seja Bem Vindo!</Text>
          <Text style={styles.subTitle}>Efetue seu login</Text>
        </View>

        <View style={[styles.subView, { gap: 24 }]}>
          <Input value={user} onChange={() => setUser} label="Usuário" />
          <Input value={password} onChange={() => setPassword} label="Senha" />

          <Button onPress={() => {}}>Acessar</Button>
        </View>
      </View>
    </Container>
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
});
