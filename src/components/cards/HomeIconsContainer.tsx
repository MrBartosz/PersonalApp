import React from 'react'
import { StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextRegular } from '../typography/Text'

interface HomeIconsProps {
  color: string
  size: number
}

export const HomeIcons = ({ color, size }: HomeIconsProps) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="chemical-weapon" size={size} color={color} />
        <TextRegular fontSize={12} color="white">
          Checkout My Stack
        </TextRegular>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="phone" size={size} color={color} />
        <TextRegular fontSize={12} color="white">
          Contact Me
        </TextRegular>
      </View>
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
