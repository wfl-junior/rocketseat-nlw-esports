import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import { Fragment } from "react";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

const App: React.FC = () => {
  const [isFontReady] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Background>{isFontReady ? <Home /> : <Loading />}</Background>
    </Fragment>
  );
};

export default App;
