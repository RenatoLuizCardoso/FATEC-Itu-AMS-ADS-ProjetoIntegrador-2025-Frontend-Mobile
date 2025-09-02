import { MenuItemCard } from '@components';
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

interface ListCardMenuHandle {
  scrollToIndex: (index: number) => void;
}

export const ListCardMenu = forwardRef<ListCardMenuHandle, ListCardMenuProps>(
  ({ categories, menuItems }, ref) => {
    const flatListRef = useRef<FlatList>(null);

    useImperativeHandle(ref, () => ({
      scrollToIndex: (index: number) => {
        flatListRef.current?.scrollToIndex({
          index,
          animated: true,
          viewPosition: 0,
        });
      },
    }));

    if (menuItems.length === 0) {
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
          renderItem={({ item: category }) => {
            const categoryItems = menuItems.filter(
              (item) => item.categoryId === category.id,
            );

            const subCategoriesWithItems = category.subCategories
              .map((sub: { id: string; name: string }) => {
                const subItems = menuItems.filter(
                  (item) =>
                    item.categoryId === category.id &&
                    item.subCategoryId === sub.id,
                );
                return subItems.length > 0 ? { ...sub, items: subItems } : null;
              })
              .filter(Boolean);

            if (
              categoryItems.length === 0 &&
              subCategoriesWithItems.length === 0
            ) {
              return null;
            }

            return (
              <View style={styles.categoryBlock}>
                <Text style={styles.categoryTitle}>{category.name}</Text>

                {subCategoriesWithItems.length === 0
                  ? categoryItems.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onPress={() => handleItemPress(item)}
                      />
                    ))
                  : subCategoriesWithItems.map(
                      (sub: {
                        id: string;
                        name: string;
                        items: MenuItem[];
                      }) => (
                        <View key={sub.id} style={styles.subCategoryBlock}>
                          <Text style={styles.subCategoryTitle}>
                            {sub.name}
                          </Text>
                          {sub.items.map((item) => (
                            <MenuItemCard
                              key={item.id}
                              item={item}
                              onPress={() => handleItemPress(item)}
                            />
                          ))}
                        </View>
                      ),
                    )}
              </View>
            );
          }}
        />
      </View>
    );
  },
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  categoryBlock: {
    gap: 16,
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subCategoryBlock: {
    gap: 8,
  },
  subCategoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
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
