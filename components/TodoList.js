import React from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  CheckBox,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { set } from 'react-native-reanimated'

const TodoList = (props) => {
  const [isSelected, setIsSeleceted] = React.useState(false)

  return (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={isSelected ? styles.strikeStyle : {}}>
          {props.message}
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setIsSeleceted}
          style={styles.checkbox}
        />
      </View>
      <TouchableOpacity onPress={props.onTouch.bind(this, props.pid)}>
        <Ionicons name='trash-bin' size={23} color='crimson' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: '#DEABF7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  data: {},
  iconContainers: {},
  textContainer: {
    width: '80%',
  },
  strikeStyle: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxContainer: {
    // marginBottom: 10,
  },
})

export default TodoList
