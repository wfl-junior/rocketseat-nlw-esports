import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  cover: {
    width: 240,
    height: 320,
    justifyContent: "flex-end",
    borderRadius: 8,
    overflow: "hidden",
  },
  footer: {
    width: "100%",
    height: 102,
    padding: 16,
    justifyContent: "flex-end",
  },
  name: {
    color: THEME.colors.text,
    fontSize: THEME.fontSize.md,
    fontFamily: THEME.fontFamily.bold,
  },
  ads: {
    color: THEME.colors.caption[300],
    fontSize: THEME.fontSize.md,
    fontFamily: THEME.fontFamily.regular,
  },
});
