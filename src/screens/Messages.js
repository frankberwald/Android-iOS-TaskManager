import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/styles';


export default function Messages() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.messagesText}>There are no messages here.</Text>
    </View>
  );
}