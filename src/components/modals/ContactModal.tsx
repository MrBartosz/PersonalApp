import { FC, useRef } from 'react'
import {
  GestureResponderEvent,
  Image,
  Linking,
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

interface ContactModalProps {
  closeModal: () => void
}

const facebookImage = require('../../../assets/images/facebook.png')
const instagramImage = require('../../../assets/images/instagram.png')
const mailImage = require('../../../assets/images/gmail.png')
const phoneImage = require('../../../assets/images/phone.png')

export const ContactModal: FC<ContactModalProps> = ({ closeModal }) => {
  const modalRef = useRef(null)
  const handleContainerPress = (event: GestureResponderEvent) => {
    if (event.target === modalRef.current) {
      closeModal()
    }
  }
  const openLink = (url: string) => {
    Linking.openURL(url)
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
                <TextRegular fontSize={18}>{strings.contactModal.header}</TextRegular>
                <View style={styles.content}>
                  <Pressable
                    onPress={() => openLink('https://www.facebook.com/bartek.maks/')}
                    style={styles.imageContainer}
                  >
                    <Image source={facebookImage} style={styles.images} />
                    <TextRegular fontSize={15}>Facebook</TextRegular>
                  </Pressable>

                  <Pressable
                    onPress={() => openLink('https://www.instagram.com/maksix/')}
                    style={styles.imageContainer}
                  >
                    <Image source={instagramImage} style={styles.images} />
                    <TextRegular fontSize={15}>Instagram</TextRegular>
                  </Pressable>

                  <Pressable onPress={() => openLink('mailto:maksimowski97@gmail.com')} style={styles.imageContainer}>
                    <Image source={mailImage} style={styles.images} />
                    <TextRegular fontSize={15}>Mail</TextRegular>
                  </Pressable>

                  <Pressable onPress={() => openLink('tel:+48519635097')} style={styles.imageContainer}>
                    <Image source={phoneImage} style={styles.images} />
                    <TextRegular fontSize={15}>Phone</TextRegular>
                  </Pressable>
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
    height: 300,
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
  images: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginBottom: 12,
    borderRadius: 30,
  },
  imageContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    width: 80,
  },
  textContent: {
    gap: 8,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIconContainer: {
    alignSelf: 'flex-end',
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    width: 360,
    gap: 12,
  },
})
