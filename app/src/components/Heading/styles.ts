import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 32,
  },
  title: {
    color: THEME.colors.text,
    fontSize: THEME.fontSize.lg,
    fontFamily: THEME.fontFamily.black,
  },
  subtitle: {
    color: THEME.colors.caption[400],
    fontSize: THEME.fontSize.md,
    fontFamily: THEME.fontFamily.regular,
  },
});
