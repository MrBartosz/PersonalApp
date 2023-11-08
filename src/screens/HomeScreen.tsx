import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../styles/theme'

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Witam eaweasdsdsadsadasdasdadsads1asa</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.dark,
  },
})
