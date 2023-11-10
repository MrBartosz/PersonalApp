import { ScrollView, StyleSheet, View } from 'react-native'
import { mocks } from '../../../api/mocks'
import { PhotoCard } from '../../components/cards/PhotoCard'
import { TextRegular } from '../../components/typography/Text'
import { theme } from '../../styles/theme'
export const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.aboutMeScreenHeader}>
          <TextRegular marginTop={12} fontSize={18}>
            {mocks.personalInformations.fullName}
          </TextRegular>
          <View>
            <PhotoCard />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    height: '100%',
    fontFamily: 'PoppinsRegular',
  },
  aboutMeScreenHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
