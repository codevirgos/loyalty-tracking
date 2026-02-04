import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const NewCustomer = () => {
  return (
    <View style={[styles.mainView]}>
        <Text style={{fontSize:18, fontWeight:'bold',}}>
            New Customer Registration
        </Text>
        <Text style={{color:'gray', marginTop:'2%'}}>
            This phone number is not registered.
        </Text>
        <TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:20, padding:15, borderRadius:8, backgroundColor:'#6666cc', justifyContent:'center', alignItems:'center'}}>
                <Image style={{tintColor:'white', width:20, height:20}} source={require("../images/plus.png")} />
                <Text style={{color:'white', textAlign:'center', fontSize:16,}}> Register </Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height:'30%',
    backgroundColor:'#ececF9',
    borderWidth:.5,
    borderColor:'#A9D2FC',
    borderRadius:10,
    padding:25,
    paddingVertical:'10%',
    marginTop:20,
  }
});

export default NewCustomer;