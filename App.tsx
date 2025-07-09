import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigators/AuthNavigator';

// Toasts Imports
import Toast from 'react-native-toast-message';
import toastConfig from './components/Config/toastConfig';
import LoginScreen from './screens/AuthScreens/Screens/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from './screens/AuthScreens/Screens/SignUpScreen';
import ForgotPassword from './screens/AuthScreens/Screens/ForgetPassword';

export default function App() {
  return (
    
     <>
      <NavigationContainer>
      <AuthNavigator/>
    </NavigationContainer>
    <Toast
        config={toastConfig}
        position="top"
        visibilityTime={3000}
        autoHide
      />
     </>
    
  );
}