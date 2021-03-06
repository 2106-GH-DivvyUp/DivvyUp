import React from 'react';
import { StyleSheet, Text } from 'react-native';

//this ErrorMessage component contains a text component that is used to display an error message when authenticating an user
//these are human-readable error messages thrown by Firebase Auth 
//firebase documentation for auth error messages https://firebase.google.com/docs/auth/admin/errors

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>⚠️ {error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: '#fdca40',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600'
  }
});

export default ErrorMessage;