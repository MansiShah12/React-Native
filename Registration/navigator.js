import {createStackNavigator} from 'react-navigation';
import Registration from './source/components/registration';
import Login from './source/components/login';

export const Navigator=createStackNavigator({

    Registration:{
        screen:Registration,
        navigationOptions:{
                header:null
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{header:null}}
})

