import { FC, useRef } from 'react'
import {
  GestureResponderEvent,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../styles/theme'
import { strings } from '../constants/string'
import { TextRegular } from '../typography/Text'

interface StackModalProps {
  closeModal: () => void
}

const reactImage = require('../../../assets/images/reactNative.png')
const nextjsImage = require('../../../assets/images/nextjs.png')
const javascriptImage = require('../../../assets/images/javascript.png')
const typescriptImage = require('../../../assets/images/typescript.png')
const gitImage = require('../../../assets/images/git.png')
const expoImage = require('../../../assets/images/expo.png')
const paperImage = require('../../../assets/images/paper.png')

export const StackModal: FC<StackModalProps> = ({ closeModal }) => {
  const modalRef = useRef(null)
  const handleContainerPress = (event: GestureResponderEvent) => {
    if (event.target === modalRef.current) {
      closeModal()
    }
  }

  return (
    <Modal transparent onRequestClose={closeModal}>
      <TouchableWithoutFeedback onPress={handleContainerPress}>
        <View style={styles.modalOverlay} ref={modalRef}>
          <View style={styles.modalContainer}>
            <View style={styles.contentContainer}>
              <Pressable onPress={closeModal} style={styles.closeIconContainer}>
                <MaterialCommunityIcons name="close" size={30} />
              </Pressable>

              <View style={styles.textContent}>
                <TextRegular fontSize={16}>{strings.stackModal.header}</TextRegular>
                <View style={styles.content}>
                  <View style={styles.imageContainer}>
                    <Image source={reactImage} style={styles.images} />
                    <TextRegular fontSize={12}>React Native</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={nextjsImage} style={styles.images} />
                    <TextRegular fontSize={15}>Next.js</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={javascriptImage} style={styles.images} />
                    <TextRegular fontSize={15}>JavaScript</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={reactImage} style={styles.images} />
                    <TextRegular fontSize={15}>React</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={typescriptImage} style={styles.images} />
                    <TextRegular fontSize={15}>TypeScript</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={expoImage} style={styles.images} />
                    <TextRegular fontSize={15}>Expo</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={gitImage} style={styles.images} />
                    <TextRegular fontSize={15}>Git</TextRegular>
                  </View>
                  <View style={styles.imageContainer}>
                    <Image source={paperImage} style={styles.images} />
                    <TextRegular fontSize={15}>RNP</TextRegular>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    paddingTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 360,
    height: 349,
    alignItems: 'center',
    gap: 24,
    backgroundColor: theme.colors.nav,
    paddingTop: 12,
    paddingBottom: 46,
    paddingLeft: 20,
  },
  contentContainer: {
    width: 320,
    height: 281,
    gap: 20,
  },
  textContent: {
    gap: 8,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 80,
  },
  images: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginBottom: 12,
    borderRadius: 50,
  },
  closeIconContainer: {
    alignSelf: 'flex-end',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: 360,
    gap: 12,
  },
})
