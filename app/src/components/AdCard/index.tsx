import { GameController } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { AdDTO } from "../../DTOs/AdDTO";
import { THEME } from "../../theme";
import { AdCardInfo } from "./AdCardInfo";
import { styles } from "./styles";

interface AdCardProps {
  ad: AdDTO;
}

export const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  function handleConnect() {}

  return (
    <View style={styles.container}>
      <AdCardInfo label="Nome" value={ad.name} />

      <AdCardInfo
        label="Tempo de jogo"
        value={`${ad.yearsPlaying} ano${ad.yearsPlaying !== 1 ? "s" : ""}`}
      />

      <AdCardInfo
        label="Disponibilidade"
        value={`${ad.weekDays.length} dias \u2022 ${ad.startHour} - ${ad.endHour}`}
      />

      <AdCardInfo
        label="Chamada de áudio?"
        value={ad.usesVoiceChannel ? "Sim" : "Não"}
        valueColor={THEME.colors[ad.usesVoiceChannel ? "success" : "alert"]}
      />

      <TouchableOpacity style={styles.button} onPress={handleConnect}>
        <GameController color={THEME.colors.text} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};
