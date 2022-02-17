import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  content: {
    marginVertical: 16,
    flexDirection: "row",
  },
  image: {
    width: "50%",
    height: 120,
    resizeMode: "cover",
    marginRight: 8,
    borderRadius: 8,
  },
  footer: {
    flexDirection: "row",
  },
});
