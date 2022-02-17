import { useCallback } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../Card/Card";
import Divider from "../Divider/Divider";
import Button from "../Button/Button";
import styles from "./MovieCard.styles.js";

const MovieCard = ({
  id,
  title,
  description,
  image,
  onLike,
  onHide,
  isLikeVisible,
  isHideVisible,
}) => {
  const navigation = useNavigation();

  const handleNavigateToMovie = useCallback(() => {
    navigation.push("Movie", {
      title,
      description,
      image,
    });
  }, [title, description, image]);

  const handleLike = useCallback(() => {
    onLike({ id, title, description, image });
  }, [id, title, description, image]);

  const handleHide = useCallback(() => {
    onHide(id);
  }, [id]);

  return (
    <Card onPress={handleNavigateToMovie}>
      <View style={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={4}>{description}</Text>
        </View>
      </View>

      <Divider />
      <View style={styles.footer}>
        {isLikeVisible && <Button title="Like" onPress={handleLike} />}
        {isHideVisible && (
          <Button title="hide" onPress={handleHide} color="#aeabab" />
        )}
      </View>
    </Card>
  );
};

export default MovieCard;
