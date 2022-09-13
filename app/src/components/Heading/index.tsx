import { Text, View, ViewProps } from "react-native";
import { styles } from "./styles";

interface HeadingProps extends ViewProps {
  title: string;
  subtitle: string;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  ...props
}) => (
  <View style={styles.container} {...props}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
