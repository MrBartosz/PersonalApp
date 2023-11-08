import * as React from 'react'
import { BottomNavigation } from 'react-native-paper'
import { theme } from '../../styles/theme'

export const LowerMenu = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'portfolio', title: 'Portfolio', focusedIcon: 'wallet', unfocusedIcon: 'wallet-outline' },
    { key: 'home', title: 'Home', focusedIcon: 'home-city', unfocusedIcon: 'home-city-outline' },
    { key: 'aboutMe', title: 'About Me', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    portfolio: () => <></>,
    home: () => <></>,
    aboutMe: () => <></>,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: theme.colors.nav, height: 85 }}
      theme={{ colors: { secondaryContainer: theme.colors.bright } }}
      activeColor="black"
      inactiveColor="black"
    />
  )
}
