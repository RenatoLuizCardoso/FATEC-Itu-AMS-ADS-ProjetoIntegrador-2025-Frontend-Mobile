import { MenuItemCard } from '@components';

import { type MenuItem, menuItems } from '@data';

import { Alert, FlatList, StyleSheet, View } from 'react-native';

const handleItemPress = (item: MenuItem) => {
  Alert.alert('Item Clicado', `Você selecionou: ${item.name}`);
};

export function ListCardMenu() {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <MenuItemCard item={item} onPress={() => handleItemPress(item)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  listContainer: {
    flex: 1,

    marginTop: 16,
  },

  listContent: {
    gap: 16,
  },
});
