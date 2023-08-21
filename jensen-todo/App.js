import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([
    'Eat',
    'Sleep',
    'Repeat',
  ]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TodoInput onAddTask={handleAddTask} />
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
});

export default App;

