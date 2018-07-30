

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Navigator} from './navigator';
import store from  './source/store/registration.js'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
     
    );
  }
}       

