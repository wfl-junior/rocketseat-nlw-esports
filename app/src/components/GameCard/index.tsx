import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { THEME } from "../../theme";
import { Game } from "../../utils/games";
import { styles } from "./styles";

export interface GameCardProps extends TouchableOpacityProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game, ...props }) => (
  <TouchableOpacity style={styles.container} {...props}>
    <ImageBackground style={styles.cover} source={game.cover}>
      <LinearGradient colors={THEME.colors.footer} style={styles.footer}>
        <Text style={styles.name}>{game.name}</Text>
        <Text style={styles.ads}>{game.ads} anúncios</Text>
      </LinearGradient>
    </ImageBackground>
  </TouchableOpacity>
);
