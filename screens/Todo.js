import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import TodoList from '../components/TodoList'

const Todo = (props) => {
  // declaring states
  const [input, setInput] = React.useState('')
  const [todo, setTodo] = React.useState([])

  //handling Text
  const handleText = (textInput) => {
    setInput(textInput)
  }

  //handle on press
  const handleOnPress = () => {
    setTodo([...todo, { id: new Date().getTime().toString(), value: input }])
    setInput('')
  }
  // console.log(todo)

  // console.log(input)
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder='Enter the goal'
        style={styles.form}
        onChangeText={handleText}
        value={input}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.6}
        onPress={handleOnPress}
      >
        <Text style={styles.btnText}>ADD</Text>
      </TouchableOpacity>
      <FlatList
        data={todo}
        renderItem={(itemData) => {
          return <TodoList message={itemData.item.value} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: 'white',
    paddingRight: 20,
  },
  form: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  btn: {
    marginLeft: 80,
    marginTop: 20,
    height: 50,
    width: '55%',
    backgroundColor: '#CDF8CB',
    padding: 12,
    paddingLeft: 80,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '200',
  },
})

Todo.navigationOptions = {
  headerTitle: 'ToDo App',
  headerStyle: {
    backgroundColor: '#DEABF7',
  },
}

export default Todo
