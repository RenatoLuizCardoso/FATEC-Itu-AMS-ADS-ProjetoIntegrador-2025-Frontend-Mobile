import { BottomBar, Card, Container, Navbar } from '@components';
import { type MenuItem, removables } from '@data';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox, Divider } from 'react-native-paper';
import type { NavProps } from 'routes';

export function ItemRemovable() {
  const route = useRoute();
  const navigation = useNavigation<NavProps>();
  const { item } = route.params as { item: MenuItem };
  const ItemRemovables = item.removableIds?.map((id) => removables[id] || []);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleClick = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Container>
      <Navbar />

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Remover</Text>

        <Divider />
        {ItemRemovables.map((removable) => (
          <Card onPress={() => handleClick(removable.id)} key={removable.id}>
            <Text style={styles.addonTitle}>{removable.name}</Text>
            <View pointerEvents="none">
              <Checkbox
                status={checkedItems[removable.id] ? 'checked' : 'unchecked'}
                color="#6B031D"
              />
            </View>
          </Card>
        ))}
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
            onPress={() => navigation.navigate('Menu')}
            labelStyle={{ fontSize: 16 }}
            style={{ borderRadius: 12 }}
          >
            Adicionar
          </Button>
        </View>
      </BottomBar>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
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
