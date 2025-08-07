import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {

  const router= useRouter();

  return (
   <View
   style={{
    flex: 1,
    backgroundColor: 'white',
   }}
   >
    <View style={{
      marginLeft:5
    }}>
      <Image source={require('./../assets/images/CasaPrado_Logo.png')}
style={{
  width: '100%',
  height:150,
  marginTop: 100,
}}></Image>
    </View>

  <View style={{
    padding:35,
    backgroundColor: '#b09977',
    height: '100%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  }}>
    <Text style={{
      fontSize:35,
      fontWeight: 'bold',
      textAlign:'center',
      color: 'white'
    }}>Bienvenido a tu Tienda Virtual</Text>

    <Text style={{
      fontSize:20,
      marginTop: 20,
      textAlign:'center',
      color: 'white'
    }}>La elegancia del cuero en cada diseño, 100% cuero en el calzado por dentro y por fuera</Text>
  
    <TouchableOpacity style={styles.button} 
      onPress={()=> router.push('/auth/signIn')} >
        
      <Text style={styles.buttonText} > Acceder </Text>
    </TouchableOpacity>
  </View>
   </View>
  );
}
const styles = StyleSheet.create({
 button: {
  padding:15,
  backgroundColor:'white',
  marginTop: 20,
  borderRadius:10
  },
  buttonText:{
    textAlign:'center',
    fontSize:18
  }
 
});
