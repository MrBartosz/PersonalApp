import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ContactModal } from '../modals/ContactModal'
import { StackModal } from '../modals/StackModal'
import { TextRegular } from '../typography/Text'

interface HomeIconsProps {
  color: string
  size: number
}

enum ActiveModal {
  None = 'none',
  Stack = 'stack',
  Contact = 'contact',
}

export const HomeIcons = ({ color, size }: HomeIconsProps) => {
  const [activeModal, setActiveModal] = useState<ActiveModal>(ActiveModal.None)

  const handleModal = (modal: ActiveModal) => {
    setActiveModal(modal)
  }

  const closeModal = () => {
    setActiveModal(ActiveModal.None)
  }

  return (
    <View style={styles.contentContainer}>
      <Pressable style={styles.iconContainer} onPress={() => handleModal(ActiveModal.Stack)}>
        <MaterialCommunityIcons name="chemical-weapon" size={size} color={color} />
        <TextRegular fontSize={12} color="white">
          Checkout My Stack
        </TextRegular>
      </Pressable>
      <View style={styles.separator} />
      <Pressable style={styles.iconContainer} onPress={() => handleModal(ActiveModal.Contact)}>
        <MaterialCommunityIcons name="phone" size={size} color={color} />
        <TextRegular fontSize={12} color="white">
          Contact Me
        </TextRegular>
      </Pressable>

      {activeModal === ActiveModal.Stack && <StackModal closeModal={closeModal} />}
      {activeModal === ActiveModal.Contact && <ContactModal closeModal={closeModal} />}
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  separator: {
    width: 1,
    height: '80%',
    backgroundColor: 'white',
  },
})
