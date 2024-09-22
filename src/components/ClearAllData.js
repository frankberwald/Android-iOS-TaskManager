import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { clearAllData, TASK_KEY } from '../components/taskData';

const ClearAllData = ({isVisible, onClose, onConfirm}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Tem certeza que deseja apagar todos os dados?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={async () => {
                await clearAllData();
                onConfirm(); // Call the confirm function to notify parent
                onClose(); // Close the modal
              }}
              style={styles.saveButton}
            >
              <Text style={styles.buttonText}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.buttonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 30,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#468499',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },
  saveButton: {
    backgroundColor: '#9CD99C',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default ClearAllData;

