import React, { useRef } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { theme } from '../../styles/theme'
import { TextRegular } from '../typography/Text'

interface IVideoCard {
  videoLink: string
  title: string
}

export const VideoCard = ({ videoLink, title }: IVideoCard) => {
  const playerRef = useRef()

  return (
    <View style={styles.container}>
      {videoLink ? (
        <>
          <TextRegular fontSize={18} marginBottom={16} color={theme.colors.medium}>
            {title}
          </TextRegular>
          <View style={styles.videoCardContainer}>
            <YoutubePlayer height={300} videoId={videoLink} ref={playerRef} />
            <Button
              title="log details"
              onPress={() => {
                playerRef.current?.getCurrentTime().then((currentTime) => {
                  console.log({ currentTime })
                })

                playerRef.current?.getDuration().then((getDuration) => {
                  console.log({ getDuration })
                })
              }}
            />
          </View>
        </>
      ) : (
        <>
          <TextRegular fontSize={18} marginBottom={16} color={theme.colors.medium}>
            Wideo jeszcze niedostępne!
          </TextRegular>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCardContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: theme.colors.white,
  },
})
