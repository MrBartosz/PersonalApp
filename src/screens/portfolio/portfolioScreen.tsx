import { ScrollView, StyleSheet, View } from 'react-native'
import { theme } from '../../styles/theme'
export const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: '100%',
  },
})
