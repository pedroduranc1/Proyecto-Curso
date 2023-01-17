import { View, Text } from 'react-native'
import React from 'react'
import FooterNav from '../components/FooterNav'

const TiemposVerbales = ({navigation}) => {
  return (
    <View className="flex-1">
      <FooterNav navigation={navigation}/>
    </View>
  )
}

export default TiemposVerbales