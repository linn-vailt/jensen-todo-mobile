import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
      <Text style={styles.headerText}>Keep-A-Task!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add" onPress={handleAddTask} />
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
  headerText: {
    fontFamily: 'monospace',
    fontSize: 34,
    alignSelf: 'center',
    marginBottom: 15,
    borderBottomWidth: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderStyle: 'dotted',
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
});

export default App;
