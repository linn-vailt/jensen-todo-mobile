import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TodoItem = ({ task, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text>{task}</Text>
      <Button title="Delete" color="red" onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
});

export default TodoItem;
