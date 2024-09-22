
import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { addTask, getTasks } from '../components/taskData'
import { clearAllData } from '../components/taskData';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from '../styles/styles'

const NewTask = ({onTaskAdded}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskName, setNewTaskName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClearData = async () => {
    await clearAllData();
    if (onTaskAdded) {
      onTaskAdded();
    }
  };

  const handleRefresh = async () => {
    await loadTasks();
  };

  const saveTask = async () => {
    if (newTaskName.trim() !== '' && descricao.trim() !== '' && data.trim() !== '' ) {

      const taskDate = new Date(data);
      if (isNaN(taskDate.getDate())) {
        return;
      }
      
      const formattedDate = taskDate.toISOString().split('T')[0];

      const createTask = {
        id: getTasks().length + 1,
        name: newTaskName,
        descricao: descricao,
        data: formattedDate,
      };

      await addTask(createTask);
      setNewTaskName('');
      setDescricao('');
      setData('');
      closeModal();
    } if ( onTaskAdded ) {
      onTaskAdded();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.outterButtons}>

        <TouchableOpacity style={styles.openModalButton} title="Clear Data" onPress={openModal} >
          <Text style={styles.outterButtonText}><MaterialCommunityIcons name="plus" size={20}></MaterialCommunityIcons>Criar Tarefa</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <Text style={styles.outterButtonText}><MaterialCommunityIcons name="refresh" size={20}></MaterialCommunityIcons>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} title="Clear Data" onPress={handleClearData} >
          <Text style={styles.outterButtonText}><MaterialCommunityIcons name="cancel" size={20}></MaterialCommunityIcons>Apagar Tudo</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Criar uma tarefa.</Text>

            <TextInput
              placeholder='Digite o nome da tarefa'
              value={newTaskName}
              onChangeText={setNewTaskName}
              style={styles.modalTextInput}
            />
            <TextInput
              placeholder='Digite a descrição'
              value={descricao}
              onChangeText={setDescricao}
              style={styles.modalTextInput}
              />
            <TextInput
              placeholder='Informe a data'
              value={data}
              keyboarType="default"
              onChangeText={setData}
              style={styles.modalTextInput}
              />
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={saveTask} style={styles.saveButton}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.buttonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};



export default NewTask;
