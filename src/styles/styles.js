import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tabTitle: {
    fontWeight:'bold',
    fontSize: 20
  },
  messagesText: {
    fontSize: 24
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 5
  },
  newTaskContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    marginTop: 35
  },
  search: {
    width: 350,
    height: 35,
    borderColor: '#000',
    borderWidth: 1,
    top: 0,
    left: 0,
    right: 0,
    marginBottom:20,
    marginTop: 10,
    textAlign: 'center',
    borderRadius: 10
  },
  outterButtons: {
    flex: 1,
    flexDirection: 'row',
    gap: 5,
  },
  outterButtonText: {
    color: '#fff',
    fontSize: 17
  },
  openModalButton: {
    backgroundColor: "#2986cc",
    borderRadius: 10,
    padding: 10,
    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 30,
    backgroundColor: "#FFF",
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalTextInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E2EBFA",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 10,
    width: 200,
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    gap: 30
  },
  closeButton: {
    backgroundColor: "#468499",
    borderRadius: 10,
    padding: 10,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: "#9CD99C",
    borderRadius: 10,
    padding: 10,
    width: 80,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: '#ff2400',
    borderRadius: 10,
    padding: 10,
    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  refreshButton: {
    backgroundColor: '#ccac00',
    borderRadius: 10,
    padding: 10,
    width: 140,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  taskItem: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    width: 400
  },
  taskName: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  checkFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#ccc'
  },
  updateIcon: {
    flex: 1,
    marginLeft: 30
  },
  taskDescription: {
    fontSize: 18,
    marginVertical: 4,
  },
  taskStatus: {
    textDecorationLine: 'line-through',
    color: '#ccc'
  },
  taskDate: {
    fontSize: 16,
    color: '#888'
  },
});

export default styles;