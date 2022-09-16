import { GameController } from "phosphor-react-native";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { AdDTO } from "../../DTOs/AdDTO";
import { THEME } from "../../theme";
import { AdCardInfo } from "./AdCardInfo";
import { styles } from "./styles";

interface AdCardProps {
  ad: AdDTO;
  onConnect: () => void | Promise<void>;
  isConnecting?: boolean;
}

export const AdCard: React.FC<AdCardProps> = ({
  ad,
  onConnect,
  isConnecting = false,
}) => (
  <View style={styles.container}>
    <AdCardInfo label="Nome" value={ad.name} />

    <AdCardInfo
      label="Tempo de jogo"
      value={`${ad.yearsPlaying} ano${ad.yearsPlaying !== 1 ? "s" : ""}`}
    />

    <AdCardInfo
      label="Disponibilidade"
      value={`${ad.weekDays.length} dia${
        ad.weekDays.length !== 1 ? "s" : ""
      } \u2022 ${ad.startHour} - ${ad.endHour}`}
    />

    <AdCardInfo
      label="Chamada de áudio?"
      value={ad.usesVoiceChannel ? "Sim" : "Não"}
      valueColor={THEME.colors[ad.usesVoiceChannel ? "success" : "alert"]}
    />

    <TouchableOpacity
      style={styles.button}
      onPress={onConnect}
      disabled={isConnecting}
    >
      {isConnecting ? (
        <ActivityIndicator color={THEME.colors.text} size={20} />
      ) : (
        <GameController color={THEME.colors.text} size={20} />
      )}

      <Text style={styles.buttonTitle}>Conectar</Text>
    </TouchableOpacity>
  </View>
);
