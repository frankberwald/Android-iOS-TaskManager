import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import styles from '../styles/styles';
import Task from '../components/Task';
import NewTask from '../components/NewTask';
import { getTasks, saveTasks } from '../components/taskData';

export default function TodayTask() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const taskList = await getTasks();
      setTasks(taskList);
      setFiltered(taskList);
    };
    loadTasks();
  }, []);

  useEffect(() => {
    if (search === '') {
      setFiltered(tasks);
    } else {
      const filteredTasks = tasks.filter(item =>
        item.name && item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(filteredTasks);
    }
  }, [search, tasks]);

  const handleTaskAdded = async () => {
    const updatedTasks = await getTasks();
    setTasks(updatedTasks);
    setFiltered(updatedTasks);
  };

  const handleToggleTask = async (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
    await saveTasks(updatedTasks);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          placeholder='Pesquisa'
          onChangeText={setSearch}
          value={search}
        />
        {filtered.map(task => (
          <View key={task.id}>
            <Task
              name={task.name}
              descricao={task.descricao}
              data={task.data}
              done={task.done} // Pass the done status
              onToggle={() => handleToggleTask(task.id)} // Pass the task ID to the toggle function
            />
          </View>
        ))}
        <NewTask onTaskAdded={handleTaskAdded} />
      </View>
    </ScrollView>
  );
}
