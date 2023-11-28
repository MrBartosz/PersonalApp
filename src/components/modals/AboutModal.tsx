import { FC, useRef } from 'react'
import { GestureResponderEvent, Modal, Pressable, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../../styles/theme'
import { TextRegular } from '../typography/Text'

interface AboutModalProps {
  closeModal: () => void
  title: string
}

export const AboutModal: FC<AboutModalProps> = ({ closeModal, title }) => {
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
                <TextRegular fontSize={18}>{title}</TextRegular>
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
    height: 250,
    alignItems: 'center',
    gap: 24,
    backgroundColor: theme.colors.nav,
    paddingTop: 12,
    paddingBottom: 46,
    paddingLeft: 20,
  },
  contentContainer: {
    width: 320,
    height: 200,
    gap: 20,
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
