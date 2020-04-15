import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
`;

export const Visor = styled.View`
  background-color: #01911e;
  width: 100%;
  height: 130px;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const VisorText = styled.Text`
  color: #fff;
  font-size: 50px;
`;

export const Area = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  height: 15%;
`;

export const Button = styled.TouchableOpacity`
  width: 25%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.TextInput.attrs({
  editable: false,
})`
  font-size: 60px;
`;

export const ButtonTextOperator = styled.TextInput.attrs({
  editable: false,
})`
  font-size: 60px;
  color: #01911e;
`;
