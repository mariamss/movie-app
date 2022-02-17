import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import Divider from "../../components/Divider/Divider.js";
import styles from "./Movie.styles.js";

const Movie = () => {
  const { params } = useRoute();

  return (
    <View>
      <Image source={{ uri: params.img }} style={styles.image} />
      <Divider />
      <View style={styles.content}>
        <Text style={styles.title}>{params.title}</Text>
        <Text>{params.description}</Text>
      </View>
    </View>
  );
};

export default Movie;
