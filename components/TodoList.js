import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const TodoList = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.data}>{props.message}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('strike')
        }}
      >
        <Ionicons name='checkbox' size={23} color='green' />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log('Deleted')
        }}
      >
        <Ionicons name='trash-bin' size={23} color='crimson' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#DEABF7',
  },

  data: {},
  iconContainers: {},
  textContainer: {
    width: '80%',
  },
})

export default TodoList
