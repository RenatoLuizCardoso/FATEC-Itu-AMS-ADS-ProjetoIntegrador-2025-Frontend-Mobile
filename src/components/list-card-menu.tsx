import { CategoryBlock } from '@components';
import type { categories, MenuItem } from '@data';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

const handleItemPress = (item: MenuItem) => {
  Alert.alert('Item Clicado', `Você selecionou: ${item.name}`);
};

interface ListCardMenuProps {
  categories: typeof categories;
  menuItems: MenuItem[];
}

export interface ListCardMenuHandle {
  scrollToIndex: (index: number) => void;
}

type Category = (typeof categories)[number];

export const ListCardMenu = forwardRef<ListCardMenuHandle, ListCardMenuProps>(
  ({ categories, menuItems }, ref) => {
    const flatListRef = useRef<FlatList<Category>>(null);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index: number) => {
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0,
        });
      },
    }));

    const hasAnyItem = menuItems.length > 0;

    if (!hasAnyItem) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Nenhum item encontrado</Text>
        </View>
      );
    }

    return (
      <View style={styles.mainContainer}>
        <FlatList
          ref={flatListRef}
          data={categories}
          keyExtractor={(category) => category.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item: category }) => (
            <CategoryBlock
              category={category}
              menuItems={menuItems}
              onItemPress={handleItemPress}
            />
          )}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
