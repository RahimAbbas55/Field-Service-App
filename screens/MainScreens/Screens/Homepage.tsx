// screens/HomeScreen.tsx
import { View, Text, FlatList, StyleSheet, Dimensions, SafeAreaView, StatusBar } from 'react-native';
import { GlobalColors } from '../../../constants/GlobalColors';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ServicTypesProps } from '../../../types/ServiceTypes';
import { HomepageStyles } from '../Styles/Homepage.styles';
import ServiceCard from '../../../components/Reusable-Components/ServiceCard';

const { width } = Dimensions.get('window');

const services: ServicTypesProps[] = [
  { id: '1', title: 'Electrician', icon: 'flash', color: '#F59E0B' },
  { id: '2', title: 'Plumber', icon: 'water', color: '#3B82F6' },
  { id: '3', title: 'Carpenter', icon: 'construct', color: '#8B5CF6' },
  { id: '4', title: 'Cleaner', icon: 'sparkles', color: '#10B981' },
  { id: '5', title: 'Mechanic', icon: 'car-sport', color: '#EF4444' },
  { id: '6', title: 'Painter', icon: 'color-palette', color: '#F97316' },
];

export default function Homepage() {
  const navigation = useNavigation();

  const renderHeader = () => (
    <View style={HomepageStyles.headerContainer}>
      <Text style={HomepageStyles.welcomeText}>Welcome Back!</Text>
      <Text style={HomepageStyles.header}>Choose Your Service</Text>
      <Text style={HomepageStyles.subHeader}>Find trusted professionals for all your home needs</Text>
    </View>
  );

  const getItemLayout = (data: any, index: number) => ({
    length: (width - 48) / 2,
    offset: ((width - 48) / 2) * index,
    index,
  });

  return (
    <SafeAreaView style={HomepageStyles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={GlobalColors.background} />
      <LinearGradient
        colors={[GlobalColors.background, '#FFFFFF']}
        style={HomepageStyles.gradientContainer}
      >
        <View style={HomepageStyles.container}>
          {renderHeader()}
          
          <FlatList
            data={services}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={HomepageStyles.list}
            columnWrapperStyle={HomepageStyles.row}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ServiceCard
                title={item.title}
                icon={item.icon}
                color={item.color}
                onPress={() => console.log('btn pressed')
                  //   navigation.navigate('BookingScreen' as never, { service: item } as never)
                }
              />
            )}
            ItemSeparatorComponent={() => <View style={HomepageStyles.separator} />}
            getItemLayout={getItemLayout}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}