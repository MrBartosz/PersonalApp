import { StyleSheet, View } from 'react-native'
import { IContentCard } from '../../../typescript/interfaces/textInterfaces'
import { theme } from '../../styles/theme'
import { TextRegular } from '../typography/Text'
export const ContentCard = ({ year, content }: IContentCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextRegular fontSize={24}>{year}</TextRegular>
      </View>
      <View style={styles.content}>
        <TextRegular>{content}</TextRegular>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    opacity: 0.8,
    marginTop: 20,
  },
  header: { marginLeft: 20, marginTop: 5 },
  content: {
    marginLeft: 20,
    marginBottom: 10,
    marginRight: 5,
  },
})
