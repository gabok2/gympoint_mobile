import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled(TextInput)`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #111;
`;
