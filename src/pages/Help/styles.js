import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  align-self: stretch;
  margin: 10px;
`;
export const Container2 = styled.TouchableOpacity`
  background-color: #fff;
  margin: 10px;
  padding: 20px;

  flex: 1;
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 80px;
  margin: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Grupamento = styled.View`
  flex-direction: row;
`;

export const Icoins = styled(Icon)`
  margin-right: 10px;
  color: ${props => (props.res ? '#18c718' : '#999')};
`;

export const Pergunta = styled.Text`
  margin-top: 10px;
  font-size: 17px;
  color: #a3a3a3;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 16px;
  margin-top: 4px;
  font-weight: 400;
`;

export const Txt = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => (props.res ? '#18c718' : '#7a7a7a')};
`;
