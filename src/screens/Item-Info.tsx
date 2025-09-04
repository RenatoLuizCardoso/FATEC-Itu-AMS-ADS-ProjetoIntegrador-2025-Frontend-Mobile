import { Card, Container, Counter, Navbar } from '@components';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

export function ItemInfo() {
  return (
    <Container>
      <Navbar title="Comanda 40" />

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&q=80',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Bruschetta</Text>
          <Text style={styles.price}>R$10,50</Text>
        </View>
        <Text style={styles.subText}>
          Uma entrada clássica e irresistível. Começamos com fatias generosas de
          pão italiano rústico, que são delicadamente torradas até atingirem a
          crocância perfeita. Em seguida, cobrimos com uma mistura vibrante de
          tomates frescos picados, alho, folhas de manjericão e um fio generoso
          do melhor azeite de oliva extra virgem. É o sabor autêntico da Itália
          em cada mordida.
        </Text>
        <Divider style={styles.divider} />
        <Text style={styles.sectionTitle}>Adicionais</Text>

        <Card>
          <View>
            <Text style={styles.addonTitle}>Leite condensado</Text>
            <Text style={styles.subText}>R$5,00</Text>
          </View>
          <View style={{ alignSelf: 'flex-end' }}>
            <Counter />
          </View>
        </Card>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
  },
  content: {
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B031D',
  },
  price: {
    fontSize: 18,
    color: '#000',
  },
  subText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 20,
  },
  divider: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#6B031D',
  },
  addonTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6B031D',
    marginBottom: 10,
  },
});
