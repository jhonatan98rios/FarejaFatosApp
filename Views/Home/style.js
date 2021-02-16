import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #F5FCFF;
`;

export const RoundedIcon = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
    padding: 5px;
    background-color: #ffffff;
    margin-bottom: 32px;
    z-index: 9;
`

export const Button = styled.TouchableOpacity`
    width: 85%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: #33FF99;  
    border-radius: 15px;
    margin-bottom: 16px;
`;
