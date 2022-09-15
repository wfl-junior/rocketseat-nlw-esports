import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { GameDTO } from "../../DTOs/GameDTO";
import { THEME } from "../../theme";
import { styles } from "./styles";

export interface GameCardProps extends TouchableOpacityProps {
  game: GameDTO;
}

export const GameCard: React.FC<GameCardProps> = ({ game, ...props }) => (
  <TouchableOpacity style={styles.container} {...props}>
    <ImageBackground style={styles.cover} source={{ uri: game.bannerUrl }}>
      <LinearGradient colors={THEME.colors.footer} style={styles.footer}>
        <Text style={styles.name}>{game.title}</Text>
        <Text style={styles.ads}>{game._count.ads} anúncios</Text>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);
