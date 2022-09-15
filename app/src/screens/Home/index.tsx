import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/logo.png";
import { Background } from "../../components/Background";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GameDTO } from "../../DTOs/GameDTO";
import { api } from "../../services/api";
import { styles } from "./styles";

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [games, setGames] = useState<GameDTO[]>([]);

  useEffect(() => {
    api
      .get<{ games: GameDTO[] }>("/games")
      .then(response => setGames(response.data.games))
      .catch(console.log);
  }, []);

  function handleOpenGame(game: GameDTO) {
    navigate("game", { game });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={game => game.id}
          renderItem={({ item }) => (
            <GameCard game={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};
