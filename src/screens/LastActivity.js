import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import styles from '../styles/styles';
import { getTasks } from '../components/taskData';
import { useFocusEffect } from '@react-navigation/native';


export default function LastActivity() {
  const [tasks, setTasks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadTasks = async () => {
        const taskList = await getTasks(); 
        if (Array.isArray(taskList)) {
          const sortedTasks = taskList.sort((a, b) => new Date(b.data) - new Date(a.data) );
          setTasks(sortedTasks);
        } else {
          setTasks([]); 
        }
      };

      loadTasks(); 
    }, [])
  );
  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
     <Text style={[styles.taskName, item.done && styles.done]}>
        {item.name}
      </Text>
      <Text style={styles.taskDescription}>Descrição: {item.descricao}</Text>
      <Text style={styles.taskDate}>Data: {new Date(item.data).toLocaleDateString()}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
}
