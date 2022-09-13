import { FlatList, Image, View } from "react-native";
import logo from "../../assets/logo.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/games";
import { styles } from "./styles";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />

    <Heading
      title="Encontre seu duo!"
      subtitle="Selecione o game que deseja jogar..."
    />

    <FlatList
      data={GAMES}
      keyExtractor={game => game.id}
      renderItem={({ item }) => <GameCard game={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
    />
  </View>
);
