import {StyleSheet, Text, View} from 'react-native';

const Registration = () => {
  return (
    <View style={[styles.mainView]}>
        <Text style={{fontSize:16, color:'green'}}>
            Customer registered successfully!
        </Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    height:60,
    backgroundColor:'#E5FFF3',
    borderWidth:.5,
    borderColor:'green',
    borderRadius:10,
    padding:15,
    marginTop:20
  }
});

export default Registration;