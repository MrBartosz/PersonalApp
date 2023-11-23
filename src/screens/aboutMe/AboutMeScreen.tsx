import { ScrollView, StyleSheet, View } from 'react-native'
import { ContentCard } from '../../components/cards/AboutMeContent'
import { PhotoCard } from '../../components/cards/PhotoCard'
import { strings } from '../../components/constants/string'
import { TextRegular } from '../../components/typography/Text'
import { theme } from '../../styles/theme'
export const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.aboutMeScreenHeader}>
          <View>
            <PhotoCard />
          </View>
          <TextRegular fontSize={20} marginTop={12}>
            {strings.aboutMeContent.contentHeader}
          </TextRegular>
          <View style={styles.contentCardsContainer}>
            <ContentCard year="2018" content={strings.aboutMeContent.content2018} />
            <ContentCard year="2020" content={strings.aboutMeContent.content2020} />
            <ContentCard year="2021" content={strings.aboutMeContent.content2021} />
            <ContentCard year="2022" content={strings.aboutMeContent.content2022} />
            <ContentCard year="2023" content={strings.aboutMeContent.content2023} />
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
  },
  aboutMeScreenHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCardsContainer: {
    width: '100%',
  },
})
