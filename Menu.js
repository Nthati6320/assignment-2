import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Menu({food, picture,price,totalprice,setTotalP}) {
    
function addition(){
    setTotalP(totalprice + price);
}
function subtraction(){
    setTotalP(totalprice - price);
}
  return (
    
      <View style={styles.two}>
        <View style={styles.circle}><Image source={picture}
      style={{height: 140, width: 140, borderRadius: 140/2, right: -3, top: 3 }} /></View>
      <Text style={{color: 'black', fontSize: 18, fontWeight: '700',  textAlign: 'center',}}>{food} M{price} </Text>
      <View style={styles.but}><Button title='Order' onPress={addition}/></View>
      <View style={styles.but1}><Button title='minus' onPress={subtraction}/></View>


      
        
      </View>

  );
}

const styles = StyleSheet.create({
  

  two:{
    backgroundColor: 'whitesmoke',
    height: 300,
    width: 245,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
    borderColor: 'lightgrey',
    shadowColor: 'black',
    borderWidth: 2,
    marginBottom: 80,
    alignSelf:'center',
  },

  circle:{
    backgroundColor: 'whitesmoke',
    height: 150,
    width: 150,
    elevation: 20,
    borderColor: 'lightgrey',
    shadowColor: 'black',
    borderWidth: 2,
    borderRadius: 220/2,
    top: -55,
    right: -50
  },

  but1:{
      paddingTop:10,
      width: 60,
      alignItems: 'center',
      alignSelf: 'center',
      
  },

  but: {
      width: 180,
      alignItems: 'center',
      alignSelf: 'center'
  }
  
});
