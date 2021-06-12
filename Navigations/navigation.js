import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import LogIn from '../screens/Login'
import Todo from '../screens/Todo'

const TodoNav = createStackNavigator({
  LogInScreen: LogIn,
  TodoScreen: Todo,
})

export default createAppContainer(TodoNav)
