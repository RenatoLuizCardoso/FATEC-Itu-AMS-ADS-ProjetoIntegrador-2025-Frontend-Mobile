import { BottomBar, Card, Container, Counter, Navbar } from '@components';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';

export function ItemInfo() {
  return (
    <Container>
      <Navbar title="Comanda 40" />

      <ScrollView style={{ flex: 1 }}>
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
            Uma entrada clássica e irresistível. Começamos com fatias generosas
            de pão italiano rústico, que são delicadamente torradas até
            atingirem a crocância perfeita. Em seguida, cobrimos com uma mistura
            vibrante de tomates frescos picados, alho, folhas de manjericão e um
            fio generoso do melhor azeite de oliva extra virgem. É o sabor
            autêntico da Itália em cada mordida.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Adicionais</Text>

          <Card>
            <View>
              <Text style={styles.addonTitle}>Leite condensado</Text>
              <Text style={styles.subText}>R$5,00</Text>
            </View>
            <View>
              <Counter />
            </View>
          </Card>
        </View>
      </ScrollView>

      <BottomBar>
        <View style={styles.bottomLeft}>
          <Text style={styles.totalText}>Valor Total:</Text>
          <Text style={styles.label}>R$120,00</Text>
        </View>

        <View style={styles.bottomRight}>
          <Button
            mode="contained"
            buttonColor="#6B031D"
            onPress={() => {}}
            labelStyle={{ fontSize: 16 }}
            style={{ borderRadius: 12 }}
          >
            Confirmar
          </Button>
        </View>
      </BottomBar>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    minHeight: 246,
    maxHeight: 360,
  },
  content: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B031D',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'justify',
  },
  divider: {
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#6B031D',
  },
  addonTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B031D',
    marginBottom: 6,
  },
  bottomLeft: {
    flex: 1,
  },
  bottomRight: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    color: '#6B031D',
    fontWeight: 'bold',
  },
});
