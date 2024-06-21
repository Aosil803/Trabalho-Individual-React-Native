import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Incon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from '@expo/vector-icons';
import BotaoAtualizar from './components/botaoAtualizar';
import BotaoScaner from "./components/botaoScaner";
import FooterItem from "./components/footerItem";


const CloneAvg = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusbar}>
        <Text style={styles.texto1}>AVG AntiVirus</Text>
          <BotaoAtualizar/>
      </View>
      <View style={styles.scanner}>
         <BotaoScaner/>
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
          <Icon style={[styles.icon, { color: '#4bc386' }]} name="home" size={24} />
          <Text style={[styles.footerItem, { color: '#46c386' }]}>Inicio</Text>
        </View>
        <FooterItem iconName="explore" iconType="MaterialIcons" text="Explorar" />
        <FooterItem iconName="message1" iconType="AntDesign" text="Mensagem" />
        <FooterItem iconName="user" iconType="FontAwesome5" text="Conta" />
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
  
  scanner: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 16,
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
    fontSize: 11,
},
    icon: {
    color: "#fcffff",
  },

});
