import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import Smile from '../constants/Smile'
import Todo from './Todo'

const LogIn = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.svgContainer}>
        <Smile />
        <View style={styles.textContainer}>
          <Text style={styles.quote1}>"Rest at the end not in the middle"</Text>
          <Text style={styles.quote2}>
            "Many will start fast, Few will finish strong"
          </Text>
        </View>

        <Text style={styles.title}>TODO APP</Text>

        <Button
          title='Login'
          onPress={() => {
            props.navigation.navigate({ routeName: 'TodoScreen' })
          }}
          color='#15d140'
          style={styles.btn}
        />
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
    backgroundColor: '#bef7cb',
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
