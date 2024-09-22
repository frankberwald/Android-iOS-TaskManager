import { Text, View } from 'react-native';
import styles from '../styles/styles';
import { Checkbox } from 'react-native-paper';


function Task({ name, descricao, data, done, onToggle }) {
    return (
        <View style={styles.taskItem}>

            <View style={styles.checkFlex}>
            <Text style={[styles.taskName, done && styles.done]}>
                {name}
                <Checkbox
                status={done ? 'checked' : 'unchecked'}
                onPress={onToggle}
            />
            </Text>
            </View>

            <Text style={styles.taskDescription}>Descricao: {descricao}</Text>
            <Text style={styles.taskDate}>Data: {data}</Text>
        </View>
    );
}

export default Task;
