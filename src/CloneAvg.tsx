import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Incon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const CloneAvg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusbar}>
        <Text style={styles.texto1}>AVG AntiVirus</Text>
        <TouchableOpacity style={styles.button01}>
          <Text style={styles.buttonText}>ATUALIZAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scanner}>
        <View style={styles.circulo01}>
          <TouchableOpacity style={styles.circulo02}>
            <Text style={styles.buttonText2}>RESOLVER PROBLEMAS</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text3}>Há problemas não resolvidos</Text>
        <Text style={styles.text4}>Última verificação: 5 dias atrás</Text>
      </View>
      <View style={styles.box}>
        <View style={[styles.box01, { borderTopLeftRadius: 20 }]}>
          <View style={styles.paddingIcon}>
            <Incon style={styles.icon} name="shield-bug-outline" size={26} />
          </View>
          <Text style={styles.boxText}>Alerta Hacker</Text>
        </View>
        <View style={[styles.box01, { borderTopRightRadius: 20 }]}>
          <View style={styles.paddingIcon}>
            <MaterialIcons style={styles.icon} name="cleaning-services" size={26} />
          </View>
          <Text style={styles.boxText}>Limpar lixo</Text>
        </View>
        <View style={[styles.box02, { borderBottomLeftRadius: 20 }]}>
          <View style={styles.paddingIcon}>
            <Incon style={styles.icon} name="wifi-arrow-up-down" size={26} />
          </View>
          <Text style={styles.boxText}>Verificar velocidade</Text>
        </View>
        <View style={[styles.box02, { borderBottomRightRadius: 20 }]}>
          <View style={styles.paddingIcon}>
            <Incon style={styles.icon} name="cellphone-check" size={26} />
          </View>
          <Text style={styles.boxText}>Escaneamento atomático</Text>
          <Text style={styles.boxText2}>Não ativo</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Icon style={[styles.icon, { color: '#4bc386' }]} name="home" size={26} />
          <Text style={[styles.footerText, { color: '#46c386' }]}>Inicio</Text>
        </View>
        <View style={styles.footerItem}>
          <MaterialIcons style={styles.icon} name="explore" size={26} />
          <Text style={styles.footerText}>Explorar</Text>
        </View>
        <View style={styles.footerItem}>
          <Icon style={styles.icon} name="message1" size={26} />
          <Text style={styles.footerText}>Messagem</Text>
        </View>
        <View style={styles.footerItem}>
          <FontAwesome5 style={styles.icon} name="user" size={26} />
          <Text style={styles.footerText}>Conta</Text>
        </View>
      </View>
    </View>
  );
};

export default CloneAvg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a323f",
  },
  statusbar: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  texto1: {
    color: "#fefeff",
    fontSize: 20,
    fontWeight: "bold",
  },
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
  scanner: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
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
  text3: {
    color: "#ee4566",
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 20,
    textAlign: "center",
    paddingBottom: 10,
  },
  text4: {
    color: "#fbffff",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
  },
  box: {
    flex: 7,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
  },
  box01: {
    height: 110,
    width: 150,
    backgroundColor: "#383f4f",
    justifyContent: "center",
    alignItems: "center",
  },
  box02: {
    height: 155,
    width: 150,
    backgroundColor: "#383f4f",
    justifyContent: "center",
    alignItems: "center",
  },
  paddingIcon: {
    padding: 10,
    backgroundColor: "#565c6a",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    color: "#fcfffd",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  boxText2: {
    color: "#a1a3a3",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  footer: {
    flex: 1.4,
    backgroundColor: "#383f4f",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footerItem: {
    alignItems: "center",
  },
  icon: {
    color: "#fcffff",
  },
  footerText: {
    color: "#a1a3a3",
    fontSize: 11,
    marginTop: 5,
  },
});
