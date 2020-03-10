import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Input = styled.TextInput`
  color: #111;
  background-color: #fff;
  margin: 20px;
  padding: 14px;
  padding-bottom: 250px;
  height: 300px;
  border-radius: 4px;
  font-size: 17px;
`;

export const SubmitButton = styled(Button)`
  margin: 20px;
`;
