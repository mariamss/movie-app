import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const HeaderButton = () => {
  const navigation = useNavigation();

  const handleNavigateToSearch = useCallback(() => {
    navigation.navigate("Search");
  }, []);

  return <Button title="Search +" onPress={handleNavigateToSearch} />;
};

export default HeaderButton;
