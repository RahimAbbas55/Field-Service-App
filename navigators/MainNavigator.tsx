import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Homepage from "../screens/MainScreens/Screens/Homepage";
import { GlobalColors } from "../constants/GlobalColors";

// setup the bottom tabs object
const Tabs = createBottomTabNavigator();

export default function CustomerTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Bookings') iconName = 'calendar-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: GlobalColors.primaryDark,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tabs.Screen name="Home" component={Homepage} />
      {/* <Tabs.Screen name="Bookings" component={BookingsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} /> */}
    </Tabs.Navigator>
  );
}