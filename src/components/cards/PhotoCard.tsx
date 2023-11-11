import { Image, StyleSheet, View } from 'react-native'

const image1 = require('../../../assets/images/personal1.jpg')
const image2 = require('../../../assets/images/personal2.jpg')
const image3 = require('../../../assets/images/personal3.jpg')
const image4 = require('../../../assets/images/personal4.jpg')

export const PhotoCard = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={image1} style={styles.images} />
        <Image source={image2} style={styles.images} />
        <Image source={image3} style={styles.images} />
        <Image source={image4} style={styles.images} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: 327,
    height: 327,
    marginTop: 15,
  },
  images: {
    width: 153,
    height: 153,
    resizeMode: 'cover',
    marginBottom: 15,
    borderRadius: 75,
  },
})
