import { ActivityIndicator, View } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = () => (
  <View style={styles.container}>
    <ActivityIndicator color={THEME.colors.primary} size={48} />
  </View>
);
