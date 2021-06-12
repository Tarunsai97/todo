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
      <View style={styles.detailContainer}>
        <Text style={styles.title}>ToDo App</Text>
        <Smile />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              props.navigation.navigate({ routeName: 'TodoScreen' })
            }}
          >
            <Text style={styles.text}>Navigate</Text>
          </TouchableOpacity>
        </View>
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
  },
  detailContainer: {
    flex: 1,
    paddingTop: '20%',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    marginLeft: '30%',
  },
  svgContainer: {
    flex: 1,
  },
  btnContainer: {
    height: '5%',
    borderWidth: 1,
    marginTop: '50%',
    padding: '7%',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 20,
    backgroundColor: '#DEABF7',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
})

export default LogIn
