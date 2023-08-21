import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
});

export default TodoInput;
