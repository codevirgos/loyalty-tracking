import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.mainView}>
        <LinearGradient
          colors={['#FAF2FA', 'transparent']}
          style={styles.gradient}
        />
        <View style={styles.bodyView}>
          <View style={styles.cardContainer}>
            <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#8C3E8C', padding:15, borderRadius:15, marginRight:15}}>
                <Image style={{tintColor:'white'}} source={require("../images/award.png")} />
              </View>
              <View>
                <Text style={{fontSize:28, fontWeight:'bold'}}>Payback Points </Text>
                <Text style={{color:'gray', fontSize:16}}>Track customer rewards </Text>
              </View>
            </View>

            <Text style={{marginTop:30, fontSize:16}}>
              Customer Phone Number
            </Text>
            <View style={{flexDirection:"row"}}>
              <View style={{paddingHorizontal:10, borderWidth:1, height:50, width:'75%', borderColor:'lightgray', borderRadius:8, marginRight:10, flexDirection:'row', alignItems:'center'}}>
                <Image style={{tintColor:'gray', marginRight:5, width:25, height:25}} source={require("../images/phone.png")} />
                <TextInput style={{fontSize:16, color:'gray'}} placeholderTextColor={'silver'} placeholder='(555) 123-4567' />
              </View>
              <TouchableOpacity>
                <View style={{padding:15, borderRadius:8, backgroundColor:'#8C3E8C', justifyContent:'center'}}>
                  <Text style={{color:'white'}}> Lookup </Text>
                </View>
               </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    minHeight:'100%'
  },

  bodyView: {
    padding:30,
    marginTop:'20%'
  },

  cardContainer: {
    //flexDirection: 'row',
    //alignItems: 'center',
    gap: 8,
    backgroundColor:'white',
    minHeight:'60%',
    borderRadius:25,
    padding:40,
    backgroundColor:"white",
    shadowColor: "gray",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    //shadowOpacity: 0.43,
    //shadowRadius: 9.51,
    elevation: 15,
  },
   gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'100%'
  },
});

export default HomeScreen;