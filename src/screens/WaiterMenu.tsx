import { CategorySelector, Container, MenuItemCard } from '@components';
import { type MenuItem, menuItems } from '@data';
import React from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

const handleItemPress = (item: MenuItem) => {
  Alert.alert('Item Clicado', `Você selecionou: ${item.name}`);
};

export function WaiterMenu() {
  return (
    <Container>
      <View style={styles.mainContainer}>
        <CategorySelector />
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
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  listContainer: {
    flex: 1,
    marginTop: 16,
  },
  listContent: {
    gap: 16,
  },
});
