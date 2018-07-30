import React,{Component} from 'react';
import {StyleSheet,Text,View,PixelRatio,TouchableOpacity,Image,TextInput,Linking} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/registration_action';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'




const user = (<Icon name="user-o" size={20} color="gray" marginTop="50" />)
const password = (<Icon1 name="lock-open" size={20} color="gray" marginTop="50" />)

 class Registration extends Component{
   constructor(props)
   {
     super(props);
     this.state = {
      avatarSource: null,
      gender:"",
      email:"",
      password:"",
      fname:"",
      lname:"",
      };
   }

   radio_props (value)
   {
    this.setState({gender:value})
   }

   clear()
   {
     this.setState({avatarSource: null,gender:"", email:"", password:"",fname:"",lname:""})
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

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) { 
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    }); 
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.topView}>
      
        <Text style={[styles.heading,{flex:1}]}> REGISTRATION FORM</Text>
       <View style={styles.container}>
          
          <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={{flex:1}}>
              <View style={[styles.avatarContainer,styles.shadow, {marginBottom: 20,justifyContent:"center"}]}>
                { this.state.avatarSource === null ? <Text>select photo</Text> :
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
            />
            </View>

             <View style={styles.input}>
              {user}
              <TextInput
                style={styles.text }
                placeholder="First Name"placeholderTextColor="gray"
                onChangeText={(text) => this.setState({fname:text})}
                value={this.state.fname}
              />
            </View>

             <View style={styles.input}>
              {user}
              <TextInput
                style={styles.text }
                placeholder="Last Name"placeholderTextColor="gray"
                onChangeText={(text) => this.setState({lname:text})}
                value={this.state.lname}
              />
            </View>

             

            <View style={{flex:3}}>
            <View style={{flex:1}}>
            <RadioGroup
          style={{flexDirection:'row',justifyContent  : 'center'}}
            onSelect = {(value) => this.radio_props(value)}
            >
              <RadioButton value={'male'} 
              buttonSize={400}
             
              >
                <Text>male</Text>
              </RadioButton>
      
              <RadioButton value={'female'}
               style={{marginLeft:20}}
              >
                <Text>female</Text>
              </RadioButton>
          </RadioGroup>
       </View>
            <LinearGradient colors={['#00c8b4', '#00f5b9']} style={[styles.btn,styles.shadow]}>
            <TouchableOpacity onPress={()=>{
               //alert("==========" + this.state.email);
                this.props.registration(this.state);
                this.clear()
                  }} >
                 <Text style={{color:"white",fontSize:15}}> Create Account</Text>
            </TouchableOpacity>
            </LinearGradient>
                 
                 <View style={{alignItems:"center",flex:1}}>
                     <Text style={{color:"gray"}} onPress={ ()=> navigate('Login') } >Already have an Account</Text>
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
    flex:1,
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
      height:50,
      backgroundColor:"rgb(0,245,183)",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      padding:5,
      margin:20,
      alignSelf:"stretch",
      flex:1,
     
    
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


function mapDispatchToProps(dispatch) {
    return (
       bindActionCreators(Actions,dispatch)
      
    )
  }



export default connect(null, mapDispatchToProps)(Registration)
