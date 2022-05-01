import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Menu  from './Menu';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [totalprice, setTotalP] = useState(0);

  var Spaghetti=require('./assets/brea.jpg');
  var chips=require('./assets/chips.jpg');
  var bre=require('./assets/bre.jpg');
  var fruit=require('./assets/fruit.jpg');
  var corn=require('./assets/corn.webp');
  var br=require('./assets/br.jpg');
  var almo=require('./assets/almo.webp');
  return (
    <View style={styles.container}>
      <View style={styles.home}><Text style={{color: 'orangered',fontWeight: '700', fontSize: 16}}>About us</Text>
      <View style={styles.menu}><AntDesign name="menufold" size={24} color="black" /></View>
      <View style={styles.down}><AntDesign name="down" size={20} color="black" /></View></View>

<ScrollView>
      <View style={styles.one}>
        <Image
        source={require("./assets/background.jpg")}
        style={{height: 187, width: 330,borderTopLeftRadius:10, borderTopRightRadius: 10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignSelf: 'center', top: 4 }} 
        />
        <Text style={{color: 'orangered', fontSize: 20, fontWeight: '700', fontStyle: 'italic', textAlign: 'center', top: -110}}>Welcome to</Text>
        <Text style={{color: 'orangered', fontSize: 20, fontWeight: '700', fontStyle: 'italic', textAlign: 'center', top: -120}}>Wings Cafe. Enjoy!</Text>
      </View>
<Menu price={24.99} picture={Spaghetti} food="Spaghetti, Vegetables& Soup"  totalprice={totalprice} setTotalP={setTotalP}/>
<Menu price={49.99} picture={chips} food="Chips ,Steak & Vegetables"  totalprice={totalprice} setTotalP={setTotalP}/>
 <Menu price={29.99} picture={bre} food="Bread, Boiled Eggs & salad"  totalprice={totalprice} setTotalP={setTotalP}/> 
 <Menu price={19.99} picture={fruit} food="Delicious different Salads"  totalprice={totalprice} setTotalP={setTotalP}/>
 <Menu price={14.99} picture={corn} food = "Aromat & Rama Popcorns"  totalprice={totalprice} setTotalP={setTotalP}/>
 <Menu price={39.99} picture={br} food = "Bread, Eggs, Avocado & Vegs"  totalprice={totalprice} setTotalP={setTotalP}/>
 <Menu price={34.99} picture={almo} food = "Delicious & Sweet Almonds"  totalprice={totalprice} setTotalP={setTotalP}/>

 <View style={styles.total}>
 <Text style={{fontWeight: '700', textAlign: 'center', fontSize: 16, color: 'orangered'}}>Total Price is {totalprice}</Text>
 </View>

 <TouchableOpacity><View style={styles.three}>
   <Text style={{fontWeight: '700', textAlign: 'center', fontSize: 16}}>Order Now</Text>
 </View></TouchableOpacity>
 
 </ScrollView>    
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  

  home:{
    backgroundColor: 'whitesmoke',
    height: 60,
    width: 360,
    paddingLeft: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    elevation: 20,
    borderColor: 'lightgrey',
    shadowColor: 'black',
    borderWidth: 2
  },

  menu:{
    right: 320
  },

  one:{
    backgroundColor: 'whitesmoke',
    height: 200,
    width: 340,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 20,
    borderColor: 'lightgrey',
    shadowColor: 'black',
    borderWidth: 2,
    marginBottom: 100
  },

  three:{
    height:50,
    width: 180,
    backgroundColor: 'whitesmoke',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
    borderColor: 'lightgrey',
    shadowColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 30,
    justifyContent: 'center'
  },
  down: {
    position: 'absolute',
    right: 7,
    paddingRight: 10
  },

  total: {
    backgroundColor: 'lightgrey',
    height:50,
    width: 180,
    alignSelf: 'center'
  },
  
});
