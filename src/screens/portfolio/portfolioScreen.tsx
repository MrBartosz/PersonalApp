import { ScrollView, StyleSheet, View } from 'react-native'
import { VideoCard } from '../../components/cards/VideoCard'
import { strings } from '../../components/constants/string'
import { theme } from '../../styles/theme'

export const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <VideoCard videoLink={strings.youtubeURL.dogAppUrl} title={strings.videoCardHeaders.dogApp} />
        <VideoCard videoLink={strings.youtubeURL.boardGameUrl} title={strings.videoCardHeaders.boardGame} />
        <VideoCard videoLink={strings.youtubeURL.websiteProjectUrl} title={strings.videoCardHeaders.websiteProject} />
        <VideoCard videoLink={strings.youtubeURL.multitaskProjectUrl} title={strings.videoCardHeaders.multitask} />
        <VideoCard videoLink={strings.youtubeURL.firstProjectsUrl} title={strings.videoCardHeaders.firstProjects} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
  },
})
