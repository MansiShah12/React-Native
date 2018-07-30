import React,{Component} from 'react';
import {StyleSheet,Text,View,PixelRatio,TouchableOpacity,Image,TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/registration_action';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';


const user = (<Icon name="user-o" size={20} color="gray" marginTop="50" />)
const password = (<Icon1 name="lock-open" size={20} color="gray" marginTop="50" />)

 class Login extends Component{
   constructor(props)
   {
     super(props);
     this.state = {
      email:"",
      password:"",
      avatarSource: null,
      };
   }

   radio_props (value)
   {
    this.setState({gender:value})
   }

   selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
      skipBackup: true
      }
    };

  
  }


  check(obj)
  {
    const {data}=this.props;
    var f=0;
    
    for(var i=0; i<data.length; i++)
    {
      if(obj.email===data[i].email && obj.password===data[i].password)
      {
        alert("Logged in");
        f=f+1;
        this.setState({avatarSource:data[i].avatarSource})
        break;

      }
    
    }
    if(f==0)
    {
      alert("Either email or password is wrong");
      this.setState({avatarSource:""})
    }

  }


  render() {
    const { navigate } = this.props.navigation;

    return (
    <View style={styles.topView}>
      
            <Text style={[styles.heading,{flex:1}]}> Login</Text>
          <View style={styles.container}>
              
              <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={{flex:1}}>
                  <View style={[styles.avatarContainer,styles.shadow, {marginBottom: 20,justifyContent:"center"}]}>
                    { this.state.avatarSource === null ? <Text></Text> :
                      <Image style={styles.avatar} source={this.state.avatarSource} />
                    }
                  </View>
              </TouchableOpacity>
            </View>

              <View style={{justifyContent:"center",flex:5}}>
                      <View style={styles.input}>
                          {user}
                          <TextInput
                            style={styles.text }
                            placeholder="abcdefgh@123456"placeholderTextColor="gray"
                            onChangeText={(text) => this.setState({email:text})}
                            value={this.state.email}
                            autoCapitalize ="none"
                        />
                      </View>

                    <View style={styles.input}>
                          {password}
                          <TextInput
                            style={styles.text }
                            placeholder="************"placeholderTextColor="gray"
                            onChangeText={(text) => this.setState({password:text})}
                            value={this.state.password}
                            autoCapitalize ="none"
                        />
                    </View>

                    <View style={{flex:3}}>
                      <LinearGradient colors={['#00c8b4', '#00f5b9']} style={[styles.btn,styles.shadow]}>
                          <TouchableOpacity onPress={()=>{
                                this.check(this.state);
                                }} >
                              <Text style={{color:"white",fontSize:17}}>LOGIN</Text>
                          </TouchableOpacity>
                        </LinearGradient>
                        <View style={{alignItems:"center",flex:1}}>

                          <Text style={{color:"gray"}} onPress={ ()=> navigate('Registration') } >Create New Account</Text>
                          
                        </View>
                      </View>
                
                </View>
    </View>
    );
  }

}

const styles = StyleSheet.create({
 container: {
   flex:3,
    alignItems: 'center',
    marginTop:10
  },
  avatarContainer: {
    alignSelf:"stretch",
    
    borderColor: '#9B9B9B',
    borderWidth: 25 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"rgb(0,245,183)",
    borderRadius:75,
    width: 150,
    height: 150,

  },
  avatar: {
    flex:1,
    borderRadius:60,
    width: 130,
    height: 130,
    
  },

 topView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
      justifyContent : 'center',
      paddingVertical:20
    },
    heading: {
      fontSize:20,
      textAlign: 'center',
      marginTop: 20,
      color:"gray",
      flex:1
    },
    text: {
      height:40,
      width:130, 
      marginTop:5,
      borderRadius:5,
      padding:10,
      margin:10
    
    },
    btn:{
      width:170,
      backgroundColor:"rgb(0,245,183)",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      padding:5,
      margin:40,
      alignSelf:"stretch",
      flex:0.5,
     
    
    },
    input:{
      flexDirection:"row",
      flex:1,
      justifyContent:"center"
    },
    shadow:
    {
      shadowColor: 'gray',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0

    }
  });

  function mapStateToProps(state)
  {
    const save=state.registration;
    return{
      data:save.data
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      countcall: bindActionCreators(Actions,dispatch),
      
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Login)


