import { Button, Container, Input } from '@components';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import type { NavProps } from 'routes';

export function Login() {
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const navigation = useNavigation<NavProps>();

  const changePasswordVisibility = () => setPasswordVisibility((prev) => !prev);

  return (
    <Container>
      <View style={styles.view}>
        <View style={styles.subView}>
          <Text style={styles.title}>Seja Bem Vindo!</Text>
          <Text style={styles.subTitle}>Efetue seu login</Text>
        </View>

        <View style={[styles.subView, { gap: 24 }]}>
          <Input
            value={user}
            onChangeText={(text) => setUser(text)}
            label="Usuário"
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            label="Senha"
            secureTextEntry={passwordVisibility}
            right={
              <TextInput.Icon icon="eye" onPress={changePasswordVisibility} />
            }
          />

          <Button
            style={{ width: '80%' }}
            onPress={() => navigation.navigate('OrderEntry')}
          >
            Acessar
          </Button>
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
