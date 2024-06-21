import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const BotaoAtualizar = () => {
  return (
    <TouchableOpacity style={styles.button01}>
      <Text style={styles.buttonText}>ATUALIZAR</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 button01: {
    width: 130,
    height: 30,
    backgroundColor: '#feaa23',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BotaoAtualizar;
