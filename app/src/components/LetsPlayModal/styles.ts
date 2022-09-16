import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.colors.overlay,
  },
  content: {
    width: 311,
    backgroundColor: THEME.colors.shape,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    alignSelf: "flex-end",
    margin: 16,
  },
  label: {
    color: THEME.colors.text,
    fontSize: THEME.fontSize.md,
    fontFamily: THEME.fontFamily.semibold,
    marginTop: 24,
    marginBottom: 8,
  },
  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.colors.background[900],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginBottom: 32,
  },
  discord: {
    color: THEME.colors.text,
    fontSize: THEME.fontSize.md,
    fontFamily: THEME.fontFamily.regular,
  },
});
