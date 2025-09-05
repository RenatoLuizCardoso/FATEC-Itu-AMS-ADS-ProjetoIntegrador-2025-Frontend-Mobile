import { MenuItemCard } from '@components';
import type { MenuItem } from '@data';
import { StyleSheet, Text, View } from 'react-native';

export interface SubCategoryWithItems {
  id: string;
  name: string;
  items: MenuItem[];
}

export function SubCategoryBlock({
  subCategory,
  onItemPress,
}: {
  subCategory: SubCategoryWithItems;
  onItemPress: (item: MenuItem) => void;
}) {
  return (
    <View style={styles.subCategoryBlock}>
      <Text style={styles.subCategoryTitle}>{subCategory.name}</Text>
      {subCategory.items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onPress={() => onItemPress(item)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  subCategoryBlock: {
    gap: 8,
  },
  subCategoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});
