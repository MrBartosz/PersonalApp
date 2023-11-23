import React from 'react'
import { StyleSheet, View } from 'react-native'
import { strings } from '../constants/string'
import { TextRegular } from '../typography/Text'

export const HomeContent = () => {
  return (
    <View style={styles.contentContainer}>
      <TextRegular fontSize={26} marginTop={20} color="white">
        {strings.homeContent.header}
      </TextRegular>
      <TextRegular fontSize={14} color="white">
        {strings.homeContent.content1}
      </TextRegular>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: '25%',
    marginLeft: 20,
  },
})
