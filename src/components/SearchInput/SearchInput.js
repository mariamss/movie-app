import { View, TextInput } from "react-native";
import styles from "./SearchInput.styles.js";

const SearchInput = ({ ...rest }) => {
  return (
    <View style={styles.container}>
      <TextInput {...rest} />
    </View>
  );
};

export default SearchInput;
