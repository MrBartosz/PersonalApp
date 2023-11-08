import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { LowerMenu } from './src/components/menus/LowerMenu'
import { HomeScreen } from './src/screens/HomeScreen'
import { AboutMeScreen } from './src/screens/aboutMe/AboutMeScreen'
import { PortfolioScreen } from './src/screens/portfolio/PortfolioScreen'

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <LowerMenu {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AboutMe" component={AboutMeScreen} />
        <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
