import { GlobalColors } from "../../../constants/GlobalColors";
import { StyleSheet } from "react-native";
export const HomepageStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: GlobalColors.background,
  },
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerContainer: {
    marginTop: 80,
    marginBottom: 32,
    paddingHorizontal: 4,
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: '500',
    color: GlobalColors.textSecondary,
    marginBottom: 4,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: GlobalColors.primaryDark,
    marginBottom: 8,
    lineHeight: 34,
  },
  subHeader: {
    fontSize: 15,
    color: GlobalColors.textSecondary,
    fontWeight: '400',
    lineHeight: 22,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  separator: {
    height: 16,
  },
});