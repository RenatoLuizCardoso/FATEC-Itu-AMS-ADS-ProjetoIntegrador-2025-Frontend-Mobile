import { BottomBar, Card, Container, Counter, Navbar } from '@components';
import { additions, type MenuItem } from '@data';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { formatCurrency } from '@utils';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import type { RootStackParamList } from 'routes';

export function ItemInfo() {
  const route = useRoute();
  const { item } = route.params as { item: MenuItem };
  const itemAdditionals = item.additionalIds.map((id) => additions[id]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleConfirm = () => {
    if (item.removableIds && item.removableIds.length > 0) {
      navigation.navigate('ItemRemovable', { item });
    } else {
      navigation.navigate('Menu');
    }
  };

  return (
    <Container>
      <Navbar />

      <ScrollView style={{ flex: 1 }}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>{formatCurrency(item.price)}</Text>
          </View>
          <Text style={styles.subText}>{item.description}</Text>

          <Divider style={styles.divider} />

          {itemAdditionals.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Adicionais</Text>
              {itemAdditionals.map((addons) => (
                <Card key={addons.id}>
                  <View>
                    <Text style={styles.addonTitle}>{addons.name}</Text>
                    <Text style={styles.subText}>
                      {formatCurrency(addons.price)}
                    </Text>
                  </View>
                  <View>
                    <Counter />
                  </View>
                </Card>
              ))}
            </>
          )}
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
            onPress={handleConfirm}
            labelStyle={{ fontSize: 16 }}
            style={{ borderRadius: 12 }}
          >
            Modificar Itens
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
