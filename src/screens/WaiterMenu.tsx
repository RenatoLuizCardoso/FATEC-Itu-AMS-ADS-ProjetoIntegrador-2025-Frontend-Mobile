import { CategorySelector, Container, ListCardMenu } from '@components';
import { categories, menuItems as dataMenuItems } from '@data';
import { useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface ListCardMenuHandles {
  scrollToIndex: (index: number) => void;
}

export function WaiterMenu() {
  const [searchValue, setSearchValue] = useState('');
  const [menuItems] = useState(dataMenuItems);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categories[0]?.id || null,
  );

  const filteredMenuItems = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return menuItems;
    return menuItems.filter((item) => item.name.toLowerCase().includes(q));
  }, [menuItems, searchValue]);

  const menuListRef = useRef<ListCardMenuHandles>(null);

  const handleCategoryPress = (categoryId: string, index: number) => {
    setSelectedCategory(categoryId);
    menuListRef.current?.scrollToIndex(index);
  };

  return (
    <Container showNav>
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryPress={handleCategoryPress}
        searchValue={searchValue}
        onSearch={setSearchValue}
      />
      <View style={styles.mainContainer}>
        <ListCardMenu
          menuItems={filteredMenuItems}
          categories={categories}
          ref={menuListRef}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
});
