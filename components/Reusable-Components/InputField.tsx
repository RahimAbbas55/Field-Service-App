import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo
import { InputFieldProps } from '../../types/UIPropsTypes';
import { GlobalColors } from '../../constants/GlobalColors';

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  icon_name,
  onChangeText,
  keyboardType = 'default',
  isPasswordField = false,
  error,
  containerStyle,
  inputStyle
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(isPasswordField);

  const toggleSecureEntry = (): void => {
    if (isPasswordField) {
      setSecureTextEntry(prevState => !prevState);
    }
  };

  return (
    <View style={[
      styles.container, 
      containerStyle,
      error ? styles.errorContainer : null
    ]}>
      <Ionicons 
        name={icon_name} 
        size={22} 
        color="#757575" 
        style={styles.icon} 
      />
      
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={[styles.input, inputStyle]}
        placeholderTextColor="#9E9E9E"
        autoCapitalize="none"
      />
      
      {isPasswordField && (
        <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
          <Ionicons
            name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
            size={22}
            color="#757575"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 56,
    borderWidth: 2,
    borderColor: GlobalColors.primaryDark,
  },
  errorContainer: {
    borderColor: '#D32F2F',
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
  },
  eyeIcon: {
    padding: 5,
  },
});

export default InputField;