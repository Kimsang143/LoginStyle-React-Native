import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Form from './Form';
import {StyleSheet, View, Text, Image} from 'react-native';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.picture}>
        <Logo />
        <Form />
        <SignupSection />
        <ButtonSubmit />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#ff66cc',
    resizeMode: 'cover',
  },
});
