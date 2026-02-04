import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Validation from '../components/Validation';
import Registration from '../components/Registration';

const HomeDarkScreen = ({navigation}) => {

  var isValid = true;
  var justRegistered = false;

  return (
    <ScrollView style={styles.container}>

      <View style={styles.mainView}>
        
        <View style={styles.bodyView}>
          <View style={styles.cardContainer}>
            <View style={{flexDirection:'row'}}>
              <View style={{backgroundColor:'#8C3E8C', padding:15, borderRadius:15, marginRight:15}}>
                <Image style={{tintColor:'white'}} source={require("../images/award.png")} />
              </View>
              <View>
                <Text style={{fontSize:28, fontWeight:'bold', color:'white'}}>Payback Points </Text>
                <Text style={{color:'gray', fontSize:16}}>Track customer rewards </Text>
              </View>
            </View>

            <Text style={{marginTop:30, fontSize:16, color:'white'}}>
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

            {isValid ? null :
              <Validation />
            }

            {justRegistered ? 

            <View>
            <Registration /> 

            <View style={{borderWidth:1, borderColor:'white', borderRadius:10,  minHeight:'40%', marginTop:25, padding:30, paddingTop:45}}>
               
              <View style={{flexDirection:'row', marginBottom:'10%'}}>
                <Image style={{tintColor:'#8C3E8C', width:35, height:35, marginRight:10}} source={require("../images/user.png")} />
                <Text style={{marginTop:0, color:'white', fontSize:28, fontWeight:'bold'}}>5551234567</Text>
              </View>
              
              <View style={{flexDirection:'row'}}>

                <View style={styles.panels}>
                  <View style={{flexDirection:'row'}}>
                    <Image style={{tintColor:'gold', width:25, height:25}} source={require("../images/award.png")} />
                    <Text style={{marginLeft:5, color:'gray', fontSize:16}}>Points </Text>
                  </View>
                  <Text style={{color:'#8C3E8C', fontSize:40, marginLeft:-8, fontWeight:'bold'}}> 430 </Text>
                </View>
                
                <View style={styles.panels}>
                  <View style={{flexDirection:'row'}}>
                    <Image style={{tintColor:'green', width:25, height:25}} source={require("../images/trending-up.png")} />
                    <Text style={{marginLeft:5, color:'gray', fontSize:16}}>Visits </Text>
                  </View>
                  <Text style={{color:'#8C3E8C', fontSize:40, marginLeft:-8, fontWeight:'bold'}}> 10 </Text>
                </View>

              </View>

              <TouchableOpacity>
                <View style={{shadowColor:'white', alignItems:'center', marginTop:20, padding:15, borderRadius:8, backgroundColor:'black', borderColor:'white', borderWidth:1, justifyContent:'center'}}>
                  <Text style={{color:'white', fontSize:18, fontWeight:"bold"}}> Done </Text>
                </View>
              </TouchableOpacity>

             

              </View>

              <Text style={{alignSelf:'center', marginTop:25, fontSize:16, color:'white',  borderWidth:0}}> Customer since 12/9/2025 </Text>
              </View>
              :
              null 
            }

              {!justRegistered ?
                <View style={{alignSelf:'center', alignItems:'center', marginTop:'25%', borderWidth:0, width:'100%'}}>
                    <Image style={{alignSelf:'center', tintColor:'lightgray', width:50, height:50}} source={require("../images/phone.png")} />
                    <Text style={{marginTop:20, color:'gray', fontSize:17}}>Enter a phone number to get started </Text>
                    <Text style={{marginTop:10, color:'silver', fontSize:13}}>Lookup existing customers or register new ones </Text>
                </View>
              : null
              }
              


           
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:'black',
    height:'160%'
    //height:'120%'
  },

  bodyView: {
    padding:20,
    marginTop:'20%',
    height:'130%'

  },

  cardContainer: {
    gap: 8,
    borderWidth:1,
    borderColor:'gray',
    minHeight:'60%',
    borderRadius:25,
    padding:40,
    backgroundColor:"black",
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
  gradient2: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:'130%',
    borderRadius:15,
    elevation:10,
  },
  panels: {
    padding:15,
    borderRadius:15,
    width:'50%',
    height:100,
    backgroundColor:'black',
    marginRight:10,
    elevation:10,
    borderWidth:1,
    borderColor:"white"
  }
});

export default HomeDarkScreen;