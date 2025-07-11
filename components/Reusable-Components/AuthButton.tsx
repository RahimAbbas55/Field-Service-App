import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { GlobalColors } from "../../constants/GlobalColors";
import { CustomButtonProps } from "../../types/UIPropsTypes";
const { width, height } = Dimensions.get("window");

const AuthButton: React.FC<CustomButtonProps> = ({
  onPress,
  style,
  isLoading,
  buttonText,
}) => {
  return (
    <TouchableOpacity
      style={styles.loginButton}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={isLoading}
    >
      <Text style={styles.loginButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  loginButton: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    backgroundColor: GlobalColors.primaryDark,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.01,
    marginBottom: height * 0.02,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AuthButton;
