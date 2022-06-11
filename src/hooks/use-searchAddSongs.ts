import {useCallback, useContext, useEffect, useState} from 'react';
import {MyContext} from '../context/context';
// import {AuthContext} from '../context/auth-context';
import {SearchItem} from '../types/searchResult';

export default function useSearchAddSongs() {
  const {state} = useContext(MyContext);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

  const handleSearch = (key: string) => {
    setSearch(key);
    // const filterResult = searchResults.filter(item =>
    //   item.name.toLowerCase().includes(search.toLowerCase()),
    // );

    // setFilterResults(filterResult);
  };

  const getSearchResults = useCallback(async () => {
    const controller = new AbortController();
    const signal = controller.signal;
    try {
      if (search.length > 0) {
        const url = `https://api.spotify.com/v1/search?q=${search}&type=track,artist`;
        await fetch(url, {
          method: 'GET',
          signal,
          headers: {
            Authorization: `Bearer ${state.auth.token}`,
            'Content-type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(result => setSearchResults(result.tracks.items));
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  }, [search, state.auth.token]);

  useEffect(() => {
    getSearchResults();
  }, [getSearchResults]);

  return {searchResults, handleSearch};
}
