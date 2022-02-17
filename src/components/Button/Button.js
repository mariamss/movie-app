import { Button as RNButton } from "react-native";
import styles from "./Button.styles.js";

const Button = ({ title, onPress, ...rest }) => {
  return (
    <RNButton title={title} onPress={onPress} style={styles.button} {...rest} />
  );
};

export default Button;
