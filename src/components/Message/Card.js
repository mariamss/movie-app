import { View } from "react-native";
import styles from "./Card.styles.js";

const Card = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
