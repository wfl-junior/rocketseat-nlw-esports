import { ColorValue, Text, View } from "react-native";
import { THEME } from "../../../theme";
import { styles } from "./styles";

interface AdCardInfoProps {
  label: string;
  value: string;
  valueColor?: ColorValue;
}

export const AdCardInfo: React.FC<AdCardInfoProps> = ({
  label,
  value,
  valueColor = THEME.colors.text,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>

    <Text style={[styles.value, { color: valueColor }]} numberOfLines={1}>
      {value}
    </Text>
  </View>
);
