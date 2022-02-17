import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./Routes";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map((screen, index) => {
          return (
            <Stack.Screen
              name={screen.name}
              component={screen.component}
              key={index}
              options={screen.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
