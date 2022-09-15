import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    color: THEME.colors.caption[300],
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fontFamily.regular,
    marginBottom: 4,
  },
  value: {
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fontFamily.bold,
  },
});
