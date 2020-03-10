import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  align-items: center;

  flex: 1;
`;
export const SubmitButton = styled(Button)`
  margin-top: 80px;
  margin: 20px;
`;

export const Checks = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
  margin: 20px;
`;

export const Background = styled.View`
  background-color: #fff;
  margin: 10px;
  height: 60px;
  border-radius: 4px;
`;
