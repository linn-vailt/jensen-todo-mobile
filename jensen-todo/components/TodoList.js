import React from 'react';
import { View, FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onDeleteTask }) => {
  const renderItem = ({ item }) => (
    <TodoItem task={item} onDelete={() => onDeleteTask(item)} />
  );

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default TodoList;
