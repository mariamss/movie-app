import { useState, useCallback } from "react";
import { FlatList, View, Text, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import MovieCard from "../../components/MovieCard/MovieCard";
import { loadFromStore, hideMovie } from "../../utils/store";
import styles from "./Home.styles";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function getLikedMovies() {
        setLoading(true);
        const movies = await loadFromStore("movies");
        const hiddenMovies = await loadFromStore("hiddenMovies");
        if (Object.keys(movies)?.length) {
          const moviesArr = Object.values(movies);
          const moviesToDisplay = moviesArr.filter(
            (movie) => !hiddenMovies?.includes(movie.id)
          );
          setMovies(moviesToDisplay);
        }
        setLoading(false);
      }
      getLikedMovies();
    }, [])
  );

  const handleHideMovie = useCallback((id) => {
    hideMovie(id);
    setMovies((prevMovies) => {
      return prevMovies.filter((p) => p.id !== id);
    });
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return (
              <MovieCard
                isHideVisible
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                onHide={handleHideMovie}
              />
            );
          }}
          ListEmptyComponent={() => {
            return <Text>No favorite movies found</Text>;
          }}
          extraData={movies}
        />
      )}
    </View>
  );
};

export default Home;
