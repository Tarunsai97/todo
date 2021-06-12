import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import Smile from '../constants/Smile'
import Todo from './Todo'

const LogIn = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.svgContainer}>
        <Text style={styles.title}>TODO APP</Text>
        <Smile />

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({ routeName: 'TodoScreen' })
          }}
        >
          <Text>NAVIGATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
LogIn.navigationOptions = {
  headerShown: false,
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  svgContainer: {
    paddingTop: 20,
    flex: 1,
    paddingBottom: 300,
  },
  textContainer: {},
  quote1: {
    fontSize: 15,
    marginRight: 20,
  },
  btn: {
    height: 200,
  },
  title: {
    marginTop: 100,
    marginBottom: 100,
    fontSize: 20,
    marginLeft: 95,
  },
})

export default LogIn
