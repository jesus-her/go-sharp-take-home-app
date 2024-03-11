import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

interface HeaderBarProps {
  title?: string
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
  },
  HeaderText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
})

export default HeaderBar
