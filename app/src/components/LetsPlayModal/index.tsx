import { MaterialIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { CheckCircle } from "phosphor-react-native";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { styles } from "./styles";

interface LetsPlayModalProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export const LetsPlayModal: React.FC<LetsPlayModalProps> = ({
  discord,
  onClose,
  ...props
}) => {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopying(true);

    try {
      await Clipboard.setStringAsync(discord);
      Alert.alert("Sucesso", "Discord copiado!");
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível copiar o discord.");
    } finally {
      setIsCopying(false);
    }
  }

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...props}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.colors.caption[500]}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.colors.success} weight="bold" />

          <Heading
            title="Let's Play"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopying}
          >
            {isCopying ? (
              <ActivityIndicator color={THEME.colors.primary} size={20} />
            ) : (
              <Text style={styles.discord}>{discord}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
