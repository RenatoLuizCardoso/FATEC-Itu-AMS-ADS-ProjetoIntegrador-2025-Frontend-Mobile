import { CategoryButton, SearchInput } from '@components';
import { categories } from '@data';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

interface Category {
  id: string;
  name: string;
}

interface CategorySelectorProps {
  selectedCategory: string | null;
  onCategoryPress: (categoryId: string, index: number) => void;
}

export function CategorySelector({
  selectedCategory,
  onCategoryPress,
}: CategorySelectorProps) {
  const [search, setSearch] = React.useState('');
  const flatlistRef = React.useRef<FlatList<Category>>(null);

  const handlePress = (categoryId: string, index: number) => {
    onCategoryPress(categoryId, index);

    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
  };

  return (
    <View style={styles.selectorContainer}>
      <SearchInput value={search} onChangeText={setSearch} />
      <FlatList
        ref={flatlistRef}
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 8,
          gap: 2,
        }}
        renderItem={({ item, index }) => (
          <CategoryButton
            isSelected={selectedCategory === item.id}
            onPress={() => handlePress(item.id, index)}
          >
            {item.name}
          </CategoryButton>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectorContainer: {
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 4,
    zIndex: 10,
    borderBottomEndRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});
