import { Container, Icon } from '@components';
import { StyleSheet, Text, View } from 'react-native';

export function HelloWorld() {
  return (
    <Container>
      <View style={styles.view}>
        <Icon name="mail" style={styles.text} />
        <Text style={styles.text}>Hello World</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#f00',
    padding: 12,
    justifyContent: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    width: 'auto',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
  },
});
