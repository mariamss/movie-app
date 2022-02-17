import { TouchableOpacity } from "react-native";
import styles from "./Card.styles.js";

const Card = ({ style, children, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;
