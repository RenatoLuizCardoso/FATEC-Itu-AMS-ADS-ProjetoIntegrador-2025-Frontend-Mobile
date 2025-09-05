import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

type SearchInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchInput({ value, onChangeText }: SearchInputProps) {
  return (
    <Searchbar
      placeholder="Pesquise aqui..."
      onChangeText={onChangeText}
      value={value}
      style={styles.searchbar}
      inputStyle={styles.inputStyle}
      iconColor="#6B031D"
      placeholderTextColor="#6B7280"
    />
  );
}

const styles = StyleSheet.create({
  searchbar: {
    borderRadius: 16,
    backgroundColor: '#f0f0f068',
    borderColor: '#595960',
    height: 40,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inputStyle: {
    color: '#000',
    fontSize: 12,
    alignSelf: 'center',
  },
});
