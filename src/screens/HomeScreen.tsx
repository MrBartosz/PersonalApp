import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { HomeContent } from '../components/cards/HomeContent'
import { HomeIcons } from '../components/cards/HomeIconsContainer'

const image1 = require('../../assets/images/forest.jpg')
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={image1} style={styles.backgroundImage} />
      <ScrollView style={styles.overlay}>
        <HomeContent />
      </ScrollView>
      <View style={styles.iconsContainer}>
        <HomeIcons size={40} color="white" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  iconsContainer: {
    marginBottom: 16,
  },
})
