import {StyleSheet, Text, View} from 'react-native';

const Validation = () => {
  return (
    <View style={[styles.mainView]}>
        <Text style={{fontSize:16, color:'brown'}}>
            Please enter a valid 10-digit phone number
        </Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    minHeight:'10%',
    backgroundColor:'#FFFFE5',
    borderWidth:.5,
    borderColor:'gold',
    borderRadius:10,
    padding:15,
    marginTop:20
  }
});

export default Validation;