import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/logo.png";
import { AdCard } from "../../components/AdCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { LetsPlayModal } from "../../components/LetsPlayModal";
import { AdDTO } from "../../DTOs/AdDTO";
import { GameDTO } from "../../DTOs/GameDTO";
import { api } from "../../services/api";
import { THEME } from "../../theme";
import { styles } from "./styles";

export interface GameRouteParams {
  game: GameDTO;
}

export const Game: React.FC = () => {
  const [ads, setAds] = useState<AdDTO[]>([]);
  const [selectedDuoDiscord, setSelectedDuoDiscord] = useState("");
  const [isFetchingDiscord, setIsFetchingDiscord] = useState(false);
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { game } = params as GameRouteParams;

  const gameId = game.id;

  useEffect(() => {
    const controller = new AbortController();

    api
      .get<{ ads: AdDTO[] }>(`/games/${gameId}/ads`, {
        signal: controller.signal,
      })
      .then(response => setAds(response.data.ads))
      .catch(console.log);

    return () => {
      controller.abort();
    };
  }, [gameId]);

  async function handleConnect(adId: AdDTO["id"]) {
    setIsFetchingDiscord(true);

    try {
      const { data } = await api.get<{ discord: string }>(
        `/ads/${adId}/discord`,
      );

      setSelectedDuoDiscord(data.discord);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível buscar o discord.");
    } finally {
      setIsFetchingDiscord(false);
    }
  }

  function handleCloseModal() {
    setSelectedDuoDiscord("");
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.colors.caption[300]}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logo} style={styles.logo} />

          <View style={styles.dumbView} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={ads}
          keyExtractor={ad => ad.id}
          renderItem={({ item: ad }) => (
            <AdCard
              ad={ad}
              onConnect={() => handleConnect(ad.id)}
              isConnecting={isFetchingDiscord}
            />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo ainda.
            </Text>
          )}
        />
      </SafeAreaView>

      <LetsPlayModal
        visible={!!selectedDuoDiscord}
        discord={selectedDuoDiscord}
        onClose={handleCloseModal}
      />
    </Background>
  );
};
