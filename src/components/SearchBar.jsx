import React from 'react';
import { Searchbar} from 'react-native-paper';

const SearchBar = ({value, onChange}) => {
  const [searchQuery, setSearchQuery] = React.useState(value);
  const handleChangeText = text => {
    setSearchQuery(text);
    if (onChange) onChange(text);
  };
  
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={handleChangeText}
      value={searchQuery}
    />
  );
};

export default SearchBar;
