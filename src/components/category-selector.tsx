import { CategoryButton, SearchInput } from '@components';
import { categories } from '@data';
import React from 'react';
import { FlatList, View } from 'react-native';

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
    <View>
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
