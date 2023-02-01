import { View, Text, TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
  return (
    <View>
      <TextInput
        className={`w-full h-12 px-5 mt-4 bg-white rounded-xl ${props.error && 'border-red-400 border-2'}`}
        {...props}
      />
      {props.errorText && (
        <Text className="mt-1 text-sm font-bold text-red-400">{props.errorText}</Text>
      )}
    </View>
  )
}


export default Input