import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';

const TASKS_KEY = '@tasks'; // Chave da async storage

export const getTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASKS_KEY);
    const tasks = jsonValue != null ? JSON.parse(jsonValue) : [];
    return Array.isArray(tasks) ? tasks : [];
  } catch (e) {
    console.error('Failed to load tasks', e);
    return [];
  }
};

export const addTask = async (task) => {
  try {
    const tasks = await getTasks(); // CARREGA OS DADOS JA SALVOS
    const newTask = { ...task, id: shortid.generate() };
    const updatedTasks = [...tasks, newTask];
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks)); // SALVA OS DADOS ATUALIZADOS
    return newTask;
  } catch (e) {
    console.error('Failed to save task', e);
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared from Async Storage');
  } catch (e) {
    console.error('Failed to clear data from Async Storage', e);
  }
};