import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';

import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([
    'Eat',
    'Sleep',
    'Repeat',
  ]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity title="Add" onPress={handleAddTask} />
      </View>

      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
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

export default App;
