import { StyleSheet, Text } from 'react-native'
import { IRecipeText } from '../../../typescript/interfaces/textInterfaces'
import { theme } from '../../styles/theme'

export const TextRegular = ({
  children,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  letterSpacing,
  textAlign,
  marginRight,
  marginTop,
  marginBottom,
  opacity,
  textDecorationLine,
}: IRecipeText) => (
  <Text
    style={[
      styles.text,
      {
        fontSize,
        fontWeight,
        color,
        lineHeight,
        letterSpacing,
        textAlign,
        marginRight,
        marginTop,
        marginBottom,
        opacity,
        textDecorationLine,
      },
    ]}
  >
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PoppinsRegular',
    color: theme.colors.dark,
    fontWeight: '400',
    textAlign: 'left',
  },
})
