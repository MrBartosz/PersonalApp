import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HomeScreen } from './src/screens/HomeScreen'
import { AboutMeScreen } from './src/screens/aboutMe/AboutMeScreen'
import { PortfolioScreen } from './src/screens/portfolio/PortfolioScreen'
import { theme } from './src/styles/theme'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.colors.dark,
          tabBarInactiveTintColor: theme.colors.lightDark,
          tabBarStyle: {
            backgroundColor: theme.colors.nav,
            height: 78,
            borderTopWidth: 0,
          },
          tabBarIconStyle: {
            marginTop: 8,
          },
          tabBarLabelStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'home-city' : 'home-city-outline'
            } else if (route.name === 'AboutMe') {
              iconName = focused ? 'account' : 'account-outline'
            } else if (route.name === 'Portfolio') {
              iconName = focused ? 'wallet' : 'wallet-outline'
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name="AboutMe" component={AboutMeScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
