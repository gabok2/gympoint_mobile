import React, { useRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useField } from '@unform/core';
import { Container, TInput } from './styles';

// eslint-disable-next-line react/prop-types
function Input({ style, icon, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput placeholderTextColor="#8f8f8f" ref={inputRef} {...rest} />
    </Container>
  );
}
export default Input;
