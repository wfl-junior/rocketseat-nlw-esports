import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: THEME.colors.shape,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 36,
    borderRadius: 6,
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: THEME.colors.text,
    fontSize: THEME.fontSize.sm,
    fontFamily: THEME.fontFamily.semibold,
    marginLeft: 8,
  },
});
