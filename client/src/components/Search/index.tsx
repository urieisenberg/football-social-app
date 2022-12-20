import { SearchInput, SearchContainer } from './styles';

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Search = ({
  searchTerm,
  setSearchTerm,
  placeholder,
}: SearchProps) => {
  console.log(searchTerm);
  return (
    <SearchContainer>
      <SearchInput
        placeholder={placeholder}
        value={searchTerm}
        onChange={setSearchTerm}
      />
    </SearchContainer>
  );
};
