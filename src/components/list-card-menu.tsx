import { MenuItemCard } from '@components';
import { categories, type MenuItem, menuItems } from '@data';
import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

const handleItemPress = (item: MenuItem) => {
  Alert.alert('Item Clicado', `Você selecionou: ${item.name}`);
};

export const ListCardMenu = React.forwardRef((_, ref) => {
  const flatListRef = React.useRef<FlatList>(null);

  React.useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number) => {
      flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0,
      });
    },
  }));

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ref={flatListRef}
        data={categories}
        keyExtractor={(category) => category.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: category }) => (
          <View style={styles.categoryBlock}>
            <Text style={styles.categoryTitle}>{category.name}</Text>
            {category.subCategories.length === 0
              ? menuItems
                  .filter((item) => item.categoryId === category.id)
                  .map((item) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onPress={() => handleItemPress(item)}
                    />
                  ))
              : category.subCategories.map(
                  (sub: { id: string; name: string }) => {
                    const subItems = menuItems.filter(
                      (item) =>
                        item.categoryId === category.id &&
                        item.subCategoryId === sub.id,
                    );
                    if (subItems.length === 0) return null;
                    return (
                      <View key={sub.id} style={styles.subCategoryBlock}>
                        <Text style={styles.subCategoryTitle}>{sub.name}</Text>
                        {subItems.map((item) => (
                          <MenuItemCard
                            key={item.id}
                            item={item}
                            onPress={() => handleItemPress(item)}
                          />
                        ))}
                      </View>
                    );
                  },
                )}
          </View>
        )}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  categoryBlock: {
    gap: 12,
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
  subCategoryBlock: {
    gap: 12,
  },
  subCategoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
