import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface FooterItemProps {
  iconName: string;
  iconType: 'AntDesign' | 'MaterialIcons' | 'FontAwesome5';
  text: string;

}

const FooterItem: React.FC<FooterItemProps> = ({ iconName, iconType, text }) => {
  let IconComponent: any;
  switch (iconType) {
    case 'AntDesign':
      IconComponent = Icon;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    default:
      IconComponent = Icon;
  }

  return (
    <View style={styles.footerItem}>
      <IconComponent style={[styles.icon]} name={iconName} size={24} />
      <Text style={[styles.footerText ]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default FooterItem;
