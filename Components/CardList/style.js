import styled from 'styled-components/native';

export const Card = styled.View`
  width: 90%;
  max-width: 350px;
  min-height: 100px;
  margin: 10px auto;
  background-color: #ffffff;
  border-radius: 10px;
  flex-direction: column;
`;

export const CardImage = styled.Image`
  width: 100%; 
  height: 140px;
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px; 
`

export const CardTitle = styled.Text`
  color: #000000; 
  width: 270px;
  padding: 10px;
  font-weight: 700; 
  font-size: 16px;
`

