import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export const BotaoScaner = () => {
  return (
    <View style={styles.circulo01}>
        <TouchableOpacity style={styles.circulo02}>
            <Text style={styles.buttonText2}>RESOLVER PROBLEMAS</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    circulo01: {
        width: 170,
        height: 170,
        padding: 10,
        borderWidth: 4,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#453546",
      },
    circulo02: {
        width: 140,
        height: 140,
        backgroundColor: '#ee4566',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
      },
      buttonText2: {
        color: 'black',
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
      },
});

export default BotaoScaner;
