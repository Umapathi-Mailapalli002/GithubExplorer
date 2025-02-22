import React from 'react';
import GetStartedScreen from './screens/GetStartedScreen';
import SearchBar from './components/SearchBar';
import ListCard from './components/ListCard';

export default function App() {
  return (
    <>
      <GetStartedScreen />
      <SearchBar />
      <ListCard />
    </>
  );
}
