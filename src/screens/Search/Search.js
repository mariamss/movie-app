import { useState, useEffect, useCallback } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import MovieCard from "../../components/MovieCard/MovieCard";
import SearchInput from "../../components/SearchInput/SearchInput";
import useDebounce from "../../hooks/useDebounce";
import styles from "./Search.styles";
import { searchMovies } from "../../services/movies";
import { addMovieToStore } from "../../utils/store";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      searchMovies(debouncedSearchTerm).then((results) => {
        setIsLoading(false);
        setMovies(results);
      });
    } else {
      setMovies([]);
      setIsLoading(false);
    }
  }, [debouncedSearchTerm]);

  const handleLike = useCallback((movie) => {
    addMovieToStore("movies", movie);
  }, []);

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Search for a movie"
        onChangeText={setSearchTerm}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return (
              <MovieCard
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                isLikeVisible
                onLike={handleLike}
              />
            );
          }}
          loading={loading}
        />
      )}
    </View>
  );
};

export default Search;
