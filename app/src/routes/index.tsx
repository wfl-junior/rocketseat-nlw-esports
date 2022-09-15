import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export const Routes: React.FC = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);
