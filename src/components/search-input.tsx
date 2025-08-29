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
      style={{
        borderColor: '#595960',
        borderWidth: 1,
        borderRadius: 16,
        marginVertical: 8,
        backgroundColor: 'white',
        color: '#6C757D',
        height: 50,
      }}
      inputStyle={{ color: 'black', alignSelf: 'center' }}
      iconColor="black"
      placeholderTextColor="gray"
    />
  );
}
