import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { textStyle, buttonStyle } = style;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>Click me</Text>
    </TouchableOpacity>
  );
};

const style = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#007aff',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 5,
    marginLeft: 5
  }
};

export default Button;
