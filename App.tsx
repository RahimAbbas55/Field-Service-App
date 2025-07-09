import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigators/AuthNavigator';

// Toasts Imports
import Toast from 'react-native-toast-message';
import toastConfig from './components/Config/toastConfig';
import LoginScreen from './screens/AuthScreens/Screens/LoginScreen';

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthNavigator/> */}
      <LoginScreen/>
    </NavigationContainer>
  );
}