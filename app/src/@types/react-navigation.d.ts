import "@react-navigation/native";
import { GameRouteParams } from "../screens/Game";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameRouteParams;
    }
  }
}
