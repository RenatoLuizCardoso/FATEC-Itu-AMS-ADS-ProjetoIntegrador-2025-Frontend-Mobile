import { MenuItemCard, SubCategoryBlock } from '@components';
import type { categories, MenuItem } from '@data';
import { getCategoryItems, getSubCategoriesWithItems } from '@utils';
import { StyleSheet, Text, View } from 'react-native';

type Category = (typeof categories)[number];

export function CategoryBlock({
  category,
  menuItems,
  onItemPress,
}: {
  category: Category;
  menuItems: MenuItem[];
  onItemPress: (item: MenuItem) => void;
}) {
  const categoryItems = getCategoryItems(menuItems, category.id);
  const subCategoriesWithItems = getSubCategoriesWithItems(menuItems, category);

  if (categoryItems.length === 0 && subCategoriesWithItems.length === 0) {
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
              onPress={() => onItemPress(item)}
            />
          ))
        : subCategoriesWithItems.map((sub) => (
            <SubCategoryBlock
              key={sub.id}
              subCategory={sub}
              onItemPress={onItemPress}
            />
          ))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryBlock: {
    gap: 16,
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
