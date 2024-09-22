import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import Messages from './src/screens/Messages';
import TodayTask from './src/screens/TodayTask';
import LastActivity from './src/screens/LastActivity';
import { SafeAreaView, Text } from 'react-native';
import styles from './src/styles/styles';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="auto" />
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Tasks'>
          <Tab.Screen
            name='Messages'
            component={Messages}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={[styles.tabTitle, focused && { fontWeight: 'bold' }]}>
                  Mensagens
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name='Tasks'
            component={TodayTask}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={[styles.tabTitle, focused && { fontWeight: 'bold' }]}>
                  Tarefas
                </Text>
              ),
            }}
          />
          <Tab.Screen
            name='Last Activity'
            component={LastActivity}
            options={{
              tabBarLabel: ({ focused }) => (
                <Text style={[styles.tabTitle, focused && { fontWeight: 'bold' }]}>
                  Últimas atividades
                </Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}