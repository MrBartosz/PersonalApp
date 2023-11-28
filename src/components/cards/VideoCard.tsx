import React, { useCallback, useState } from 'react'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import YoutubeIframe from 'react-native-youtube-iframe'
import { theme } from '../../styles/theme'
import { AboutModal } from '../modals/AboutModal'
import { TextRegular } from '../typography/Text'

const dimensionsForScreen = Dimensions.get('screen')

interface IVideoCard {
  videoLink: string
  title: string
}

export const VideoCard = ({ videoLink, title }: IVideoCard) => {
  const [playing, setPlaying] = useState(false)
  const [activeModal, setActiveModal] = useState(false)

  const onStateChanged = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false)
    }
    if (state === 'playing') {
      setPlaying(true)
    }
    if (state === 'paused') {
      setPlaying(false)
    }
  }, [])

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev)
  }, [])

  const openModal = () => {
    setActiveModal(true)
  }

  const closeModal = () => {
    setActiveModal(false)
  }

  return (
    <View style={styles.container}>
      {videoLink ? (
        <>
          <View style={styles.videoCardContainer}>
            <YoutubeIframe
              height={dimensionsForScreen.height * 0.6}
              width={dimensionsForScreen.width}
              play={playing}
              videoId={videoLink}
              onChangeState={onStateChanged}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={togglePlaying}>
                <TextRegular fontSize={32} color={theme.colors.white}>
                  {playing ? 'Pause' : 'Play'}
                </TextRegular>
              </TouchableOpacity>
              <TouchableOpacity onPress={openModal}>
                <TextRegular fontSize={32} color={theme.colors.white}>
                  About
                </TextRegular>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <TextRegular fontSize={18} marginBottom={16} color={theme.colors.white}>
            Wideo jeszcze niedostępne!
          </TextRegular>
        </>
      )}

      {activeModal === true && <AboutModal closeModal={closeModal} title={title} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoCardContainer: {
    marginTop: 16,
    backgroundColor: theme.colors.dark,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 32,
    marginBottom: 32,
  },
})
