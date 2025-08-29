import { Container } from '@components';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Input = ({ label }: { label: string }) => {
  return (
    <TextInput
      mode="outlined"
      label={label}
      outlineStyle={{ borderRadius: 12 }}
      style={{ width: '80%' }}
      activeOutlineColor={styles.title.color}
      outlineColor={styles.subTitle.color}
    />
  );
};

export function Login() {
  return (
    <Container>
      <View style={styles.view}>
        <View style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Text style={styles.title}>Seja Bem Vindo!</Text>
          <Text style={styles.subTitle}>Efetue seu login</Text>
        </View>

        <View
          style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Input label="Usuário" />
          <Input label="Senha" />

          <Button
            mode="contained"
            buttonColor={styles.title.color}
            labelStyle={{ fontSize: 20 }}
            style={{ borderRadius: 12, width: '80%' }}
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
  button: {
    backgroundColor: '#6B031D',
  },
});
